import { Test, TestingModule } from "@nestjs/testing";
import { HttpStatus, INestApplication, ValidationPipe } from "@nestjs/common";
import request from "supertest";
import { AppModule } from "../src/app.module";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { ACCESS_TOKEN_EXPIRESIN, ACCESS_TOKEN_SECRETKEY } from "../src/utils/env";
import cookieParser = require("cookie-parser");
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeormConfig } from "../src/config/typeorm.config";
import { faker } from "@faker-js/faker/locale/ko";
import { GoogleOauthService } from "../src/domain/oauth/google-oauth/google-oauth.service";
import { User } from "../src/domain/users/entities/user.entity";

const getAccessToken = async (moduleFixture: TestingModule, userId: number): Promise<string> => {
  const jwtService = moduleFixture.get<JwtService>(JwtService);
  return jwtService.sign({ userId: userId });
};

describe("RoutinesController (e2e)", () => {
  let app: INestApplication;
  let accessToken: string;
  const userId: number = Math.floor(Math.random() * 5000) + 1;
  const squat = faker.datatype.number({ min: 20, max: 300 });
  const deadlift = faker.datatype.number({ min: 20, max: 300 });
  const benchpress = faker.datatype.number({ min: 20, max: 300 });

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forFeature([User]),
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

  describe("/api/record/every (GET)", () => {
    it("GET", () => {
      return request(app.getHttpServer())
        .get("/api/record/every")
        .query({ userId: userId })
        .set({ access_token: accessToken, user_id: userId })
        .expect(HttpStatus.OK);
    });
  });

  describe("/api/record/best (GET)", () => {
    it("GET", () => {
      return request(app.getHttpServer())
        .get("/api/record/every")
        .query({ userId: userId })
        .set({ access_token: accessToken, user_id: userId })
        .expect(HttpStatus.OK);
    });
  });

  describe("/api/record/recent (GET)", () => {
    it("GET", () => {
      return request(app.getHttpServer())
        .get("/api/record/recent")
        .query({ userId: userId })
        .set({ access_token: accessToken, user_id: userId })
        .expect(HttpStatus.OK);
    });
  });

  describe("/api/record/submit (POST)", () => {
    it("POST", () => {
      const sbd = {
        userId: userId,
        squat: squat,
        benchpress: benchpress,
        deadlift: deadlift,
      };
      return request(app.getHttpServer())
        .post(`/api/record/submit`)
        .send(sbd)
        .set({ access_token: accessToken, user_id: userId })
        .expect(HttpStatus.CREATED);
    });
    it("POST", () => {
      const sbd = {
        userId: 0,
        squat: squat,
        benchpress: benchpress,
        deadlift: deadlift,
      };
      return request(app.getHttpServer())
        .post(`/api/record/submit`)
        .send(sbd)
        .set({ access_token: accessToken, user_id: userId })
        .expect(HttpStatus.BAD_REQUEST);
    });
    it("POST", () => {
      const sbd = {
        userId: userId,
        squat: 0,
        benchpress: benchpress,
        deadlift: deadlift,
      };
      return request(app.getHttpServer())
        .post(`/api/record/submit`)
        .send(sbd)
        .set({ access_token: accessToken, user_id: userId })
        .expect(HttpStatus.BAD_REQUEST);
    });
    it("POST", () => {
      const sbd = {
        userId: userId,
        squat: squat,
        benchpress: 0,
        deadlift: deadlift,
      };
      return request(app.getHttpServer())
        .post(`/api/record/submit`)
        .send(sbd)
        .set({ access_token: accessToken, user_id: userId })
        .expect(HttpStatus.BAD_REQUEST);
    });
    it("POST", () => {
      const sbd = {
        userId: userId,
        squat: squat,
        benchpress: benchpress,
        deadlift: 0,
      };
      return request(app.getHttpServer())
        .post(`/api/record/submit`)
        .send(sbd)
        .set({ access_token: accessToken, user_id: userId })
        .expect(HttpStatus.BAD_REQUEST);
    });
  });

  afterAll((done) => {
    app.close();
    done();
  });
});
