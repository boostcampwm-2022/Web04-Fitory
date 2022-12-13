import { Exercise } from "@exercise/entities/exercise.entity";
import { Test, TestingModule } from "@nestjs/testing";
import { HttpStatus, INestApplication, ValidationPipe } from "@nestjs/common";
import { AppModule } from "../src/app.module";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { ACCESS_TOKEN_EXPIRESIN, ACCESS_TOKEN_SECRETKEY } from "../src/utils/env";
import cookieParser from "cookie-parser";
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeormConfig } from "../src/config/typeorm.config";
import { GoogleOauthService } from "../src/domain/oauth/google-oauth/google-oauth.service";
import request from "supertest";
import { User } from "../src/domain/users/entities/user.entity";

const getAccessToken = async (moduleFixture: TestingModule, userId: number): Promise<string> => {
  const jwtService = moduleFixture.get<JwtService>(JwtService);
  return jwtService.sign({ userId: userId });
};

declare global {
  var alarmBar: Set<number>;
}

describe("ExerciseController (e2e)", () => {
  global.alarmBar = new Set();

  let app: INestApplication;
  let accessToken: string;
  const userId: number = Math.floor(Math.random() * 5000) + 1;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forFeature([User, Exercise]),
        TypeOrmModule.forRoot(typeormConfig),
        AppModule,
        JwtModule.register({
          secret: ACCESS_TOKEN_SECRETKEY,
          signOptions: { expiresIn: ACCESS_TOKEN_EXPIRESIN },
        }),
      ],
      providers: [JwtService, GoogleOauthService],
    }).compile();

    accessToken = await getAccessToken(moduleFixture, userId);

    app = moduleFixture.createNestApplication();

    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    );

    app.use(cookieParser());

    await app.init();
  });

  describe("Get Every Date (GET)", () => {
    it("ok", () => {
      return request(app.getHttpServer())
        .get("/api/exercise/everyDate")
        .query({ userId: userId })
        .set({ access_token: accessToken, user_id: userId })
        .expect(HttpStatus.OK);
    });

    it("Invalid User Id", () => {
      return request(app.getHttpServer())
        .get("/api/exercise/everyDate")
        .query({ userId: 0 })
        .set({ access_token: accessToken, user_id: userId })
        .expect(HttpStatus.OK)
        .then((res) => {
          const { dateList } = res.body.response;
          expect(dateList).toStrictEqual([]);
        });
    });
  });

  describe("Get Exercise Of Single Month (GET)", () => {
    it("ok", () => {
      const month = Math.floor(Math.random() * 12) + 1;
      return request(app.getHttpServer())
        .get("/api/exercise/singleMonth")
        .query({ month, userId })
        .set({ access_token: accessToken, user_id: userId })
        .expect(HttpStatus.OK)
        .then((res) => {
          const { historyList } = res.body.response;
          Object.entries(historyList).map((item) => {
            const date = item[0];
            expect(date).toMatch(/^\d{2}(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[01])$/);

            const exerciseObject = JSON.parse(JSON.stringify(item[1]))[0];
            expect(exerciseObject).toHaveProperty("name");

            const { set } = exerciseObject;
            Object.entries(set).map((setItem) => {
              expect(setItem[1]).toHaveProperty("index");
              expect(setItem[1]).toHaveProperty("kg");
              expect(setItem[1]).toHaveProperty("count");
              expect(setItem[1]).toHaveProperty("check");
            });
          });
        });
    });

    it("Invalid Month", () => {
      return request(app.getHttpServer())
        .get("/api/exercise/singleMonth")
        .query({ month: 13, userId })
        .set({ access_token: accessToken, user_id: userId })
        .expect(HttpStatus.BAD_REQUEST);
    });

    it("Invalid User Id", () => {
      const month = Math.floor(Math.random() * 12) + 1;
      return request(app.getHttpServer())
        .get("/api/exercise/singleMonth")
        .query({ month, userId: 0 })
        .set({ access_token: accessToken, user_id: userId })
        .expect(HttpStatus.OK)
        .then((res) => {
          const { historyList } = res.body.response;
          expect(historyList).toStrictEqual({});
        });
    });
  });

  describe("Get Exercise Profile (GET)", () => {
    it("ok", () => {
      return request(app.getHttpServer())
        .get("/api/exercise/profile")
        .query({ userId })
        .set({ access_token: accessToken, user_id: userId })
        .expect(HttpStatus.OK)
        .then((res) => {
          const { response } = res.body;
          expect(response).toHaveProperty("totalVolume");
          expect(response).toHaveProperty("totalExerciseDate");
        });
    });
  });

  describe("Submit Exercise (POST)", () => {
    const [followedUserId, followerUserId, exFollowerUserId] = [777, 100, 200];
    const exercise = {
      userId: followedUserId,
      exerciseList: [
        {
          exerciseName: "Jest Exercise A",
          setList: [
            { kg: 50, count: 7, check: 1 },
            { kg: 50, count: 7, check: 1 },
            { kg: 50, count: 7, check: 1 },
          ],
        },
        {
          exerciseName: "Jest Exercise B",
          setList: [
            { kg: 100, count: 9, check: 1 },
            { kg: 100, count: 9, check: 0 },
            { kg: 100, count: 9, check: 0 },
          ],
        },
      ],
    };
    it("Exercise Alarm To Follower Test", async () => {
      const prevAlarmCountOfFollower = await request(app.getHttpServer())
        .get("/api/alarms/static/unread")
        .query({ userId: followerUserId })
        .set({ access_token: accessToken, user_id: userId })
        .expect(HttpStatus.OK)
        .then((res) => {
          return res.body.response.alarmCount;
        });

      await request(app.getHttpServer())
        .post("/api/exercise/submit")
        .send(exercise)
        .set({ access_token: accessToken, user_id: userId })
        .expect(HttpStatus.CREATED);

      const currAlarmCountOfFollower = await request(app.getHttpServer())
        .get("/api/alarms/static/unread")
        .query({ userId: followerUserId })
        .set({ access_token: accessToken, user_id: userId })
        .expect(HttpStatus.OK)
        .then((res) => {
          return res.body.response.alarmCount;
        });

      expect(currAlarmCountOfFollower - prevAlarmCountOfFollower).toBe(1);
    });

    it("Exercise Alarm To Ex Follower Test", async () => {
      const prevAlarmCountOfExFollower = await request(app.getHttpServer())
        .get("/api/alarms/static/unread")
        .query({ userId: exFollowerUserId })
        .set({ access_token: accessToken, user_id: userId })
        .expect(HttpStatus.OK)
        .then((res) => {
          return res.body.response.alarmCount;
        });

      await request(app.getHttpServer())
        .post("/api/exercise/submit")
        .send(exercise)
        .set({ access_token: accessToken, user_id: userId })
        .expect(HttpStatus.CREATED);

      const currAlarmCountOfExFollower = await request(app.getHttpServer())
        .get("/api/alarms/static/unread")
        .query({ userId: exFollowerUserId })
        .set({ access_token: accessToken, user_id: userId })
        .expect(HttpStatus.OK)
        .then((res) => {
          return res.body.response.alarmCount;
        });

      expect(currAlarmCountOfExFollower - prevAlarmCountOfExFollower).toBe(0);
    });
  });

  afterAll((done) => {
    app.close();
    done();
  });
});
