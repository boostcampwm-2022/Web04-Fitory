import http from "k6/http";
import { check, group, sleep } from "k6";
import { Trend } from "k6/metrics";
import { randomIntBetween } from "https://jslib.k6.io/k6-utils/1.0.0/index.js";

export const options = {
  stages: [
    // target = VUser = Active User
    { duration: "1m", target: 30 },
    { duration: "1m", target: 60 },
    { duration: "1m", target: 90 },
    { duration: "1m", target: 120 },
    { duration: "1m", target: 150 },
    { duration: "1m", target: 200 },
    { duration: "1m", target: 250 },
  ],
  thresholds: {
    http_req_failed: ["rate<0.01"], // http 오류는 1% 미만이어야 함
    http_req_duration: ["p(95)<200"], // 요청의 95%는 200ms 미만으로 응답해야 함
    checks: ["rate>0.99"], // check()의 성공률이 99% 이상이여야 함
  },
};

const timeToFirstByte = new Trend("time_to_first_byte", true);

export default function () {
  const userId = Math.round(randomIntBetween(1, 5000));
  const guardId = 1;
  const access_token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY3MDU1MDQ5MCwiZXhwIjoxNzAyMDg2NDkwfQ.vw1Xahf48tloSV9Xfcf0q61iE_3qyUHfOvZSoff2hqo";

  const jar = http.cookieJar();
  jar.set("http://localhost:8080", "access_token", access_token, {
    domain: "localhost",
    path: "/api",
    secure: true,
    max_age: 900,
  });

  const params = {
    headers: { user_id: guardId },
    tags: { API: "yes" },
  };

  group("DB Read Test", function () {
    group("USER API", function () {
      const response = http.batch([
        {
          method: "GET",
          url: `http://localhost:8080/api/users/get?userId=${userId}`,
          body: {},
          params: params,
        },
      ]);

      for (let i = 0; i < response.length; i += 1) {
        check(response[i], {
          "main page status was 200": (res) => res.status === 200,
        });

        // Record time to first byte and tag it with the URL to be able to filter the results in Insights
        timeToFirstByte.add(response[i].timings.waiting, { ttfbURL: response[i].url, API: "yes" });
      }

      sleep(1);
    });

    group("ROUTINE API", function () {
      const response = http.get(`http://localhost:8080/api/routines/list?userId=${userId}`, {
        params,
      });

      check(response, {
        "main page status was 200": (res) => res.status === 200,
      });

      // Record time to first byte and tag it with the URL to be able to filter the results in Insights
      timeToFirstByte.add(response.timings.waiting, { ttfbURL: response.url, API: "yes" });

      const body = JSON.parse(response.body);
      if (body) {
        let routineName = body.response.routineList[0];

        if (routineName) {
          const response = http.get(
            `http://localhost:8080/api/routines/single?userId=${userId}&routineName=${routineName}`,
            params,
          );

          check(response, {
            "main page status was 200": (res) => res.status === 200,
          });

          // Record time to first byte and tag it with the URL to be able to filter the results in Insights
          timeToFirstByte.add(response.timings.waiting, { ttfbURL: response.url, API: "yes" });
        }
      }

      sleep(1);
    });

    group("EXERCISE API", function () {
      const response = http.batch([
        {
          method: "GET",
          url: `http://localhost:8080/api/exercise/everyDate?userId=${userId}`,
          body: {},
          params: params,
        },
        {
          method: "GET",
          url: `http://localhost:8080/api/exercise/singleMonth?userId=${userId}&month=${Math.round(
            randomIntBetween(6, 12),
          )}`,
          body: {},
          params: params,
        },
        {
          method: "GET",
          url: `http://localhost:8080/api/exercise/profile?userId=${userId}`,
          body: {},
          params: params,
        },
      ]);
      for (let i = 0; i < response.length; i += 1) {
        check(response[i], {
          "main page status was 200": (res) => res.status === 200,
        });

        // Record time to first byte and tag it with the URL to be able to filter the results in Insights
        timeToFirstByte.add(response[i].timings.waiting, { ttfbURL: response[i].url, API: "yes" });
      }

      sleep(1);
    });

    group("ALARM API", function () {
      const response = http.batch([
        {
          method: "GET",
          url: `http://localhost:8080/api/alarms/static/unread?userId=${userId}`,
          body: {},
          params: params,
        },
        {
          method: "GET",
          url: `http://localhost:8080/api/alarms/unread?userId=${userId}`,
          body: {},
          params: params,
        },
        {
          method: "GET",
          url: `http://localhost:8080/api/alarms/list?userId=${userId}&index=${null}`,
          body: {},
          params: params,
        },
      ]);
      for (let i = 0; i < response.length; i += 1) {
        check(response[i], {
          "main page status was 200": (res) => res.status === 200,
        });

        // Record time to first byte and tag it with the URL to be able to filter the results in Insights
        timeToFirstByte.add(response[i].timings.waiting, { ttfbURL: response[i].url, API: "yes" });
      }

      sleep(1);
    });

    group("RECORD API", function () {
      const response = http.batch([
        {
          method: "GET",
          url: `http://localhost:8080/api/record/every?userId=${userId}`,
          body: {},
          params: params,
        },
        {
          method: "GET",
          url: `http://localhost:8080/api/record/best?userId=${userId}`,
          body: {},
          params: params,
        },
        {
          method: "GET",
          url: `http://localhost:8080/api/record/recent?userId=${userId}`,
          body: {},
          params: params,
        },
      ]);
      for (let i = 0; i < response.length; i += 1) {
        check(response[i], {
          "main page status was 200": (res) => res.status === 200,
        });

        // Record time to first byte and tag it with the URL to be able to filter the results in Insights
        timeToFirstByte.add(response[i].timings.waiting, { ttfbURL: response[i].url, API: "yes" });
      }

      sleep(1);
    });

    group("STATISTICS API", function () {
      const response = http.batch([
        {
          method: "GET",
          url: `http://localhost:8080/api/statistics/everyData?range=${10}&weight=${Math.round(
            randomIntBetween(50, 150),
          )}&gender=${Math.round(randomIntBetween(0, 1))}`,
          body: {},
          params: params,
        },
      ]);
      for (let i = 0; i < response.length; i += 1) {
        check(response[i], {
          "main page status was 200": (res) => res.status === 200,
        });

        // Record time to first byte and tag it with the URL to be able to filter the results in Insights
        timeToFirstByte.add(response[i].timings.waiting, { ttfbURL: response[i].url, API: "yes" });
      }

      sleep(1);
    });

    group("FOLLOW API", function () {
      const response = http.batch([
        {
          method: "GET",
          url: `http://localhost:8080/api/follow/following?userId=${userId}`,
          body: {},
          params: params,
        },
        {
          method: "GET",
          url: `http://localhost:8080/api/follow/follower?userId=${userId}`,
          body: {},
          params: params,
        },
      ]);
      for (let i = 0; i < response.length; i += 1) {
        check(response[i], {
          "main page status was 200": (res) => res.status === 200,
        });

        // Record time to first byte and tag it with the URL to be able to filter the results in Insights
        timeToFirstByte.add(response[i].timings.waiting, { ttfbURL: response[i].url, API: "yes" });
      }

      sleep(1);
    });
  });
}
