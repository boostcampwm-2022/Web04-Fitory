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

describe("ExerciseController (e2e)", () => {
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

});
