import http from "k6/http";
import { check, group, sleep, fail } from "k6";
import { Counter, Rate, Trend } from "k6/metrics";
import { randomIntBetween } from "https://jslib.k6.io/k6-utils/1.0.0/index.js";

export let options = {
  stages: [
    // target = VUser = Active User
    { duration: "1m", target: 30 },
    { duration: "1m", target: 60 },
    { duration: "1m", target: 90 },
    { duration: "1m", target: 120 },
    { duration: "1m", target: 150 },
  ],
  thresholds: {
    http_req_failed: ["rate<0.01"], // http 오류는 1% 미만이어야 함
    http_req_duration: ["p(95)<200"], // 요청의 95%는 200ms 미만으로 응답해야 함
    checks: ["rate>0.99"], // check()의 성공률이 99% 이상이여야 함
  },
};

let timeToFirstByte = new Trend("time_to_first_byte", true);

export default function () {
  group("main page", function () {
    group("API", function () {
      let res = http.batch([
        {
          method: "GET",
          url: "https://fitory.ga/api/users/get?userId=" + Math.round(randomIntBetween(1, 5000)),
          body: {},
          params: { tags: { API: "yes" } },
        },
        {
          method: "GET",
          url:
            "https://fitory.ga/api/record/recent?userId=" + Math.round(randomIntBetween(1, 5000)),
          body: {},
          params: { tags: { API: "yes" } },
        },
        {
          method: "GET",
          url:
            "https://fitory.ga/api/exercise/everyDate?userId=" +
            Math.round(randomIntBetween(1, 5000)),
          body: {},
          params: { tags: { API: "yes" } },
        },
        {
          method: "GET",
          url:
            "https://fitory.ga/api/exercise/profile?userId=" +
            Math.round(randomIntBetween(1, 5000)),
          body: {},
          params: { tags: { API: "yes" } },
        },
        {
          method: "GET",
          url: "https://fitory.ga/api/record/best?userId=" + Math.round(randomIntBetween(1, 5000)),
          body: {},
          params: { tags: { API: "yes" } },
        },
      ]);
      for (let i = 0; i < res.length; i += 1) {
        check(res[i], {
          "main page status was 200": (res) => res.status === 200,
        });

        // Record time to first byte and tag it with the URL to be able to filter the results in Insights
        timeToFirstByte.add(res[i].timings.waiting, { ttfbURL: res[i].url, API: "yes" });
      }
    });

    // Load static assets
    group("Static assets", function () {
      let res = http.batch([
        {
          method: "GET",
          url: "https://fitory.ga/images/img_logo_text.webp",
          body: {},
          params: { tags: { staticAsset: "yes" } },
        },
        {
          method: "GET",
          url: "https://fitory.ga/images/btn_challenge.webp",
          body: {},
          params: { tags: { staticAsset: "yes" } },
        },
        {
          method: "GET",
          url: "https://fitory.ga/7e5eaaf650b9e7389913.woff2",
          body: {},
          params: { tags: { staticAsset: "yes" } },
        },
        {
          method: "GET",
          url: "https://fitory.ga/favicon.ico",
          body: {},
          params: { tags: { staticAsset: "yes" } },
        },
      ]);

      for (let i = 0; i < res.length; i += 1) {
        check(res[i], {
          "main page status was 200": (res) => res.status === 200,
        });


        // Record time to first byte and tag it with the URL to be able to filter the results in Insights
        timeToFirstByte.add(res[i].timings.waiting, { ttfbURL: res[i].url, staticAsset: "yes" });
      }
    });
    sleep(1);
  });
}
