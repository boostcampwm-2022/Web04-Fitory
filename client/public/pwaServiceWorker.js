const VERSION = "v1.0.0";
const CACHE_NAME = "fitory-cache_" + VERSION;
const IMAGE_CACHE_NAME = "fitory-image_" + VERSION;

const APP_SHELL = [
  "/appImages/launchericon-192.png",
  "/appImages/launchericon-512.png",
  "/appImages/launchericon-192-maskable.png",
  "/appImages/launchericon-512-maskable.png",
  "/appImages/screenshot-home.webp",
  "/appImages/screenshot-profile.webp",
  "/appImages/screenshot-search.webp",
  "/appImages/screenshot-statistics.webp",
  "/appImages/favicon.ico",
  "/manifest.json",
  "/index.html",
];

let broadcast;
if ("BroadcastChannel" in self) {
  broadcast = new BroadcastChannel("push-channel");
}

/**
 * 파일 캐싱
 */
self.addEventListener("install", (event) => {
  console.log("FITORY service worker - install", VERSION);

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(APP_SHELL);
    }),
  );
  // 제어중인 서비스 워커가 존재해도 대기 상태를 건너뛴다.
  self.skipWaiting();
});

/**
 * CACHE_NAME이 변경되면 오래된 캐시 삭제
 */
self.addEventListener("activate", (event) => {
  console.log("FITORY service worker - activate", VERSION);

  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME && key !== IMAGE_CACHE_NAME) {
            return caches.delete(key);
          }
        }),
      );
    }),
  );
  // 활성화 즉시 클라이언트를 제어한다.(새로고침 불필요)
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  const urlPath = url.pathname.split("?")[0];

  /**
   * App Shell(Cache First)
   * Cache First 전략은 캐시에서 찾지 못하면 네트워크 요청을 하는 것이다.
   * 서비스 워커는 먼저 캐시에 접근하고 매칭된 리소스를 찾지 못하면 네트워크에 요청한다.
   */
  if (APP_SHELL.includes(urlPath)) {
    event.respondWith(
      caches.match(urlPath).then((response) => {
        return response || fetch(event.request);
      }),
    );
    return;
  }

  // bundle js(Cache First)
  if (event.request.url.includes("bundle")) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return fetch(event.request)
          .then((networkResponse) => {
            // 최신화된 데이터를 캐시에 업데이트한다
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          })
          .catch(() => {
            return cache.match(event.request).then((cacheResponse) => {
              return cacheResponse;
            });
          });
      }),
    );

    return;
  }

  // router navigate 응답
  if (event.request.mode === "navigate") {
    event.respondWith(caches.match("/index.html") || fetch(event.request));

    return;
  }

  /**
   * 이미지(Network First)
   * Network First 전략은 항상 네트워크 요청에 대한 응답을 사용하고, 네트워크 실패 시 대비책으로서 캐시를 이용한다.
   */
  if (url.pathname.startsWith("/images")) {
    event.respondWith(
      caches.open(IMAGE_CACHE_NAME).then((cache) => {
        return fetch(event.request)
          .then((networkResponse) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          })
          .catch(() => {
            return cache.match(event.request).then((cacheResponse) => {
              return cacheResponse;
            });
          });
      }),
    );
  }
});
