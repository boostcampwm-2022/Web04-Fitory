import http from "k6/http";
import { check, group, sleep } from "k6";
import { Trend } from "k6/metrics";
import { randomIntBetween } from "https://jslib.k6.io/k6-utils/1.0.0/index.js";
import crypto from "k6/crypto";
import encoding from "k6/encoding";

export const options = {
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
    http_req_duration: ["p(95)<500", "p(90)<200"], // 요청의 95%는 400ms, 90%는 200ms 미만으로 응답해야 함
    checks: ["rate>0.99"], // check()의 성공률이 99% 이상이여야 함
  },
};

const timeToFirstByte = new Trend("time_to_first_byte", true);

export default function () {
  const characters = "김이박최강권노백신유오장주조하한허홍";
  const searchName = characters.charAt(Math.floor(Math.random() * characters.length));
  const userId = 1;
  const weight = 65;
  const gender = 0;
  // const access_token = sign(__ENV.KEY, { access_token: access_token });
  const access_token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY3MDU1MDQ5MCwiZXhwIjoxNzAyMDg2NDkwfQ.vw1Xahf48tloSV9Xfcf0q61iE_3qyUHfOvZSoff2hqo";

  const jar = http.cookieJar();
  jar.set("https://fitory.ga", "access_token", access_token, {
    domain: "fitory.ga",
    path: "/api",
    secure: true,
    max_age: 900,
  });

  group("main page", function () {
    group("API", function () {
      const response = http.batch([
        {
          method: "GET",
          url: `https://fitory.ga/api/users/get?userId=${userId}`,
          body: {},
          params: { headers: { user_id: userId } },
        },
        {
          method: "GET",
          url: `https://fitory.ga/api/record/recent?userId=${userId}`,
          body: {},
          params: { headers: { user_id: userId } },
        },
        {
          method: "GET",
          url: `https://fitory.ga/api/exercise/everyDate?userId=${userId}`,
          body: {},
          params: { headers: { user_id: userId } },
        },
        {
          method: "GET",
          url: `https://fitory.ga/api/exercise/profile?userId=${userId}`,
          body: {},
          params: { headers: { user_id: userId } },
        },
        {
          method: "GET",
          url: `https://fitory.ga/api/record/best?userId=${Math.round(randomIntBetween(1, 5000))}`,
          body: {},
          params: { headers: { user_id: userId } },
        },
      ]);
      response.forEach((res) => {
        check(res, {
          "main page status was 200": (r) => r.status === 200,
        });
      });
      sleep(1);
    });

    // Load static assets
    group("Static assets", function () {
      const response = http.batch([
        {
          method: "GET",
          url: "https://fitory.ga/images/mark_arrow_right.svg",
          body: {},
        },
        {
          method: "GET",
          url: "https://fitory.ga/images/btn_arrow_left.svg",
          body: {},
        },
        {
          method: "GET",
          url: "https://fitory.ga/images/btn_arrow_right.svg",
          body: {},
        },
        {
          method: "GET",
          url: "https://fitory.ga/images/btn_home.svg",
          body: {},
        },
        {
          method: "GET",
          url: "https://fitory.ga/images/btn_statics.svg",
          body: {},
        },
        {
          method: "GET",
          url: "https://fitory.ga/images/btn_search.svg",
          body: {},
        },
        {
          method: "GET",
          url: "https://fitory.ga/images/btn_profile.svg",
          body: {},
        },
        {
          method: "GET",
          url: "https://fitory.ga/images/img_logo_alt.webp",
          body: {},
        },
        {
          method: "GET",
          url: "https://fitory.ga/images/img_logo_text.webp",
          body: {},
        },
        {
          method: "GET",
          url: "https://fitory.ga/images/btn_challenge.webp",
          body: {},
        },
        // {
        //   method: "GET",
        //   url: "https://fitory.ga/7e5eaaf650b9e7389913.woff2",
        //   body: {},
        //
        // },
      ]);
      response.forEach((res) => {
        check(res, {
          "main page status was 200": (r) => r.status === 200,
        });
      });
      sleep(1);
    });
  });

  group("statistics page", function () {
    group("API", function () {
      const response = http.batch([
        {
          method: "GET",
          url: `https://fitory.ga/api/users/get?userId=${userId}`,
          body: {},
          params: { headers: { user_id: userId } },
        },
        {
          method: "GET",
          url: `https://fitory.ga/api/record/best?userId=${userId}`,
          body: {},
          params: { headers: { user_id: userId } },
        },
        {
          method: "GET",
          url: `https://fitory.ga/api/statistics/everyData?range=10&weight=${weight}&gender=${gender}`,
          body: {},
          params: { headers: { user_id: userId } },
        },
        {
          method: "GET",
          url: `https://fitory.ga/api/record/every?userId=${userId}`,
          body: {},
          params: { headers: { user_id: userId } },
        },
      ]);
      response.forEach((res) => {
        check(res, {
          "main page status was 200": (r) => r.status === 200,
        });
      });
      sleep(1);
    });

    // Load static assets
    group("Static assets", function () {
      const response = http.batch([
        {
          method: "GET",
          url: "https://fitory.ga/images/img_logo_alt.webp",
          body: {},
        },
        {
          method: "GET",
          url: "https://fitory.ga/images/img_logo_text.webp",
          body: {},
        },
        {
          method: "GET",
          url: "https://fitory.ga/images/btn_home.svg",
          body: {},
        },
        {
          method: "GET",
          url: "https://fitory.ga/images/btn_search.svg",
          body: {},
        },
        {
          method: "GET",
          url: "https://fitory.ga/images/btn_profile.svg",
          body: {},
        },
        {
          method: "GET",
          url: "https://fitory.ga/images/btn_statics.svg",
          body: {},
        },
        // {
        //   method: "GET",
        //   url: "https://fitory.ga/7e5eaaf650b9e7389913.woff2",
        //   body: {},
        //
        // },
        // {
        //   method: "GET",
        //   url: "https://fitory.ga/6090e6b5524796768e78.woff2",
        //   body: {},
        //
        // },
      ]);
      response.forEach((res) => {
        check(res, {
          "main page status was 200": (r) => r.status === 200,
        });
      });
      sleep(1);
    });
  });

  group("search page", function () {
    group("API", function () {
      const response = http.batch([
        {
          method: "GET",
          url: `https://fitory.ga/api/record/recent?userId=${userId}`,
          body: {},
          params: { headers: { user_id: userId } },
        },
        {
          method: "GET",
          url: `https://fitory.ga/api/users/search?userName=${searchName}`,
          body: {},
          params: { headers: { user_id: userId } },
        },
        {
          method: "GET",
          url: `https://fitory.ga/api/users/recommand/list?userId=${userId}`,
          body: {},
          params: { headers: { user_id: userId } },
        },
      ]);
      response.forEach((res) => {
        check(res, {
          "main page status was 200": (r) => r.status === 200,
        });
      });

      sleep(1);
    });

    // Load static assets
    group("Static assets", function () {
      const response = http.batch([
        {
          method: "GET",
          url: "https://fitory.ga/images/img_logo_alt.webp",
          body: {},
        },
        {
          method: "GET",
          url: "https://fitory.ga/images/img_logo_text.webp",
          body: {},
        },
        {
          method: "GET",
          url: "https://fitory.ga/images/btn_home.svg",
          body: {},
        },
        {
          method: "GET",
          url: "https://fitory.ga/images/btn_search.svg",
          body: {},
        },
        {
          method: "GET",
          url: "https://fitory.ga/images/btn_profile.svg",
          body: {},
        },
        {
          method: "GET",
          url: "https://fitory.ga/images/btn_statics.svg",
          body: {},
        },
        {
          method: "GET",
          url: "https://fitory.ga/images/img_default_profile.png",
          body: {},
        },
        // {
        //   method: "GET",
        //   url: "https://fitory.ga/6090e6b5524796768e78.woff2",
        //   body: {},
        //
        // },
      ]);
      response.forEach((res) => {
        check(res, {
          "main page status was 200": (r) => r.status === 200,
        });
      });
    });
    sleep(1);
  });

  group("my page", function () {
    group("API", function () {
      const response = http.batch([
        {
          method: "GET",
          url: `https://fitory.ga/api/users/get?userId=${userId}`,
          body: {},
          params: { headers: { user_id: userId } },
        },
        {
          method: "GET",
          url: "https://fitory.ga/api/exercise/everyDate?userId=",
          body: {},
          params: { headers: { user_id: userId } },
        },
        {
          method: "GET",
          url: `https://fitory.ga/api/routines/list?userId=${userId}`,
          body: {},
          params: { headers: { user_id: userId } },
        },
        {
          method: "GET",
          url: `https://fitory.ga/api/record/recent?userId=${userId}`,
          body: {},
          params: { headers: { user_id: userId } },
        },
      ]);
      response.forEach((res) => {
        check(res, {
          "main page status was 200": (r) => r.status === 200,
        });
      });
    });

    // Load static assets
    group("Static assets", function () {
      const response = http.batch([
        {
          method: "GET",
          url: "https://fitory.ga/images/img_logo_alt.webp",
          body: {},
        },
        {
          method: "GET",
          url: "https://fitory.ga/images/img_logo_text.webp",
          body: {},
        },
        {
          method: "GET",
          url: "https://fitory.ga/images/btn_home.svg",
          body: {},
        },
        {
          method: "GET",
          url: "https://fitory.ga/images/btn_search.svg",
          body: {},
        },
        {
          method: "GET",
          url: "https://fitory.ga/images/btn_profile.svg",
          body: {},
        },
        {
          method: "GET",
          url: "https://fitory.ga/images/btn_statics.svg",
          body: {},
        },
        {
          method: "GET",
          url: "https://fitory.ga/images/btn_cancel.svg",
          body: {},
        },
        {
          method: "GET",
          url: "https://fitory.ga/images/img_default_profile.png",
          body: {},
        },
        // {
        //   method: "GET",
        //   url: "https://fitory.ga/7e5eaaf650b9e7389913.woff2",
        //   body: {},
        //
        // },
        // {
        //   method: "GET",
        //   url: "https://fitory.ga/6090e6b5524796768e78.woff2",
        //   body: {},
        //
        // },
      ]);
      response.forEach((res) => {
        check(res, {
          "main page status was 200": (r) => r.status === 200,
        });
      });
    });
    sleep(1);
  });
}
