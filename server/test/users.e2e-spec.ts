import { Test, TestingModule } from "@nestjs/testing";
import { HttpStatus, INestApplication, ValidationPipe } from "@nestjs/common";
import request from "supertest";
import { AppModule } from "../src/app.module";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { ACCESS_TOKEN_EXPIRESIN, ACCESS_TOKEN_SECRETKEY } from "../src/utils/env";
import cookieParser from "cookie-parser";
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeormConfig } from "../src/config/typeorm.config";
import { faker } from "@faker-js/faker/locale/ko";
import { GoogleOauthService } from "../src/domain/oauth/google-oauth/google-oauth.service";
import { GoogleUserInfoDto } from "../src/domain/oauth/google-oauth/dto/google-user-info.dto";
import { User } from "../src/domain/users/entities/user.entity";
import { DataSource, DataSourceOptions } from "typeorm";

const getAccessToken = async (moduleFixture: TestingModule, userId: number): Promise<string> => {
  const jwtService = moduleFixture.get<JwtService>(JwtService);
  return jwtService.sign({ userId: userId });
};

const registerUser = async (
  moduleFixture: TestingModule,
  userInfo: GoogleUserInfoDto,
): Promise<number> => {
  const googleOauthService = moduleFixture.get<GoogleOauthService>(GoogleOauthService);
  await googleOauthService.registerUser(userInfo);

  return await googleOauthService.findUserIdByOAuthId(userInfo.oauthId).then((user) => {
    return user?.id;
  });
};

describe("RoutinesController (e2e)", () => {
  let app: INestApplication;
  let accessToken: string;
  let userId: number;
  let userInfo = {
    name: faker.name.lastName() + faker.name.firstName(),
    age: faker.datatype.number({ min: 10, max: 60 }),
    gender: faker.datatype.number({ min: 0, max: 1 }),
    height: faker.datatype.number({ min: 150, max: 200 }),
    weight: faker.datatype.number({ min: 50, max: 150 }),
    oauthId: faker.datatype.number({ min: 0, max: 999999999 }).toString(),
  };

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

    userId = await registerUser(moduleFixture, userInfo);

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

  describe("/api/users/get (GET)", () => {
    it("GET", () => {
      return request(app.getHttpServer())
        .get("/api/users/get")
        .query({ userId: userId })
        .set({ access_token: accessToken, user_id: userId })
        .expect(HttpStatus.OK);
    });
  });

  describe("/api/users/profile/list (GET)", () => {
    it("GET", () => {
      return request(app.getHttpServer())
        .get(`/api/users/profile/list`)
        .set({ access_token: accessToken, user_id: userId })
        .expect(HttpStatus.OK);
    });
  });

  describe("/api/users/recommand/list (GET)", () => {
    it("GET", () => {
      return request(app.getHttpServer())
        .get("/api/users/recommand/list")
        .query({ userId: userId })
        .set({ access_token: accessToken, user_id: userId })
        .expect(HttpStatus.OK);
    });
  });

  describe("/api/users/checkName (GET)", () => {
    it("GET", () => {
      return request(app.getHttpServer())
        .get("/api/users/checkName")
        .query({ userName: "Jest" })
        .set({ access_token: accessToken, user_id: userId })
        .expect(HttpStatus.OK)
        .then((res) => {
          expect(res.body.userExists === false);
        });
    });
  });

  describe("/api/users/update (POST)", () => {
    it("POST", () => {
      const updateUser = {
        userId: Number(userId),
        name: "Jest",
        age: faker.datatype.number({ min: 10, max: 60 }),
        gender: faker.datatype.number({ min: 0, max: 1 }),
        height: faker.datatype.number({ min: 150, max: 200 }),
        weight: faker.datatype.number({ min: 50, max: 150 }),
        introduce: "Hi! Im from Jest",
      };
      return request(app.getHttpServer())
        .post(`/api/users/update`)
        .send(updateUser)
        .set({ access_token: accessToken, user_id: userId })
        .expect(HttpStatus.CREATED);
    });
  });

  describe("/api/users/checkName (GET)", () => {
    it("GET", () => {
      return request(app.getHttpServer())
        .get("/api/users/checkName")
        .query({ userName: "Jest" })
        .set({ access_token: accessToken, user_id: userId })
        .expect(HttpStatus.OK)
        .then((res) => {
          expect(res.body.userExists === true);
        });
    });
  });

  describe("/api/users/update (POST)", () => {
    it("POST", () => {
      const updateUser = {
        userId: 0,
        name: "Jest",
        age: faker.datatype.number({ min: 10, max: 60 }),
        gender: faker.datatype.number({ min: 0, max: 1 }),
        height: faker.datatype.number({ min: 150, max: 200 }),
        weight: faker.datatype.number({ min: 50, max: 150 }),
        introduce: "Hi! Im from Jest",
      };
      return request(app.getHttpServer())
        .post(`/api/users/update`)
        .send(updateUser)
        .set({ access_token: accessToken, user_id: userId })
        .expect(HttpStatus.BAD_REQUEST);
    });

    it("POST", () => {
      const updateUser = {
        userId: 0,
        name: "Jest",
        age: faker.datatype.number({ min: 10, max: 60 }),
        gender: faker.datatype.number({ min: 0, max: 1 }),
        height: "height",
        weight: faker.datatype.number({ min: 50, max: 150 }),
        introduce: "Hi! Im from Jest",
      };
      return request(app.getHttpServer())
        .post(`/api/users/update`)
        .send(updateUser)
        .set({ access_token: accessToken, user_id: userId })
        .expect(HttpStatus.BAD_REQUEST);
    });

    it("POST", () => {
      const updateUser = {
        userId: userId,
        age: faker.datatype.number({ min: 10, max: 60 }),
        gender: faker.datatype.number({ min: 0, max: 1 }),
        height: faker.datatype.number({ min: 150, max: 200 }),
        weight: faker.datatype.number({ min: 50, max: 150 }),
        introduce: "Hi! Im from Jest",
      };
      return request(app.getHttpServer())
        .post(`/api/users/update`)
        .send(updateUser)
        .set({ access_token: accessToken, user_id: userId })
        .expect(HttpStatus.BAD_REQUEST);
    });

    it("POST", () => {
      const updateUser = {
        userId: 0,
        name: "Jest",
        age: 0,
        gender: faker.datatype.number({ min: 0, max: 1 }),
        height: faker.datatype.number({ min: 150, max: 200 }),
        weight: faker.datatype.number({ min: 50, max: 150 }),
        introduce: "Hi! Im from Jest",
      };
      return request(app.getHttpServer())
        .post(`/api/users/update`)
        .send(updateUser)
        .set({ access_token: accessToken, user_id: userId })
        .expect(HttpStatus.BAD_REQUEST);
    });

    it("POST", () => {
      const updateUser = {
        userId: 0,
        name: "Jest",
        height: faker.datatype.number({ min: 150, max: 200 }),
        weight: faker.datatype.number({ min: 50, max: 150 }),
        introduce: "Hi! Im from Jest",
      };
      return request(app.getHttpServer())
        .post(`/api/users/update`)
        .send(updateUser)
        .set({ access_token: accessToken, user_id: userId })
        .expect(HttpStatus.BAD_REQUEST);
    });

    it("POST", () => {
      const updateUser = {
        userId: 0,
        name: "Jest",
        age: faker.datatype.number({ min: 10, max: 60 }),
        gender: faker.datatype.number({ min: 0, max: 1 }),
        height: 0,
        weight: faker.datatype.number({ min: 50, max: 150 }),
        introduce: "Hi! Im from Jest",
      };
      return request(app.getHttpServer())
        .post(`/api/users/update`)
        .send(updateUser)
        .set({ access_token: accessToken, user_id: userId })
        .expect(HttpStatus.BAD_REQUEST);
    });

    it("POST", () => {
      const updateUser = {
        userId: 0,
        name: "Jest",
        age: faker.datatype.number({ min: 10, max: 60 }),
        gender: faker.datatype.number({ min: 0, max: 1 }),
        height: faker.datatype.number({ min: 150, max: 200 }),
        weight: 999,
        introduce: "Hi! Im from Jest",
      };
      return request(app.getHttpServer())
        .post(`/api/users/update`)
        .send(updateUser)
        .set({ access_token: accessToken, user_id: userId })
        .expect(HttpStatus.BAD_REQUEST);
    });

    it("POST", () => {
      const updateUser = {
        userId: 0,
        name: "Jest",
        age: faker.datatype.number({ min: 10, max: 60 }),
        gender: faker.datatype.number({ min: 0, max: 1 }),
        height: faker.datatype.number({ min: 150, max: 200 }),
        weight: "weight",
        introduce: "Hi! Im from Jest",
      };
      return request(app.getHttpServer())
        .post(`/api/users/update`)
        .send(updateUser)
        .set({ access_token: accessToken, user_id: userId })
        .expect(HttpStatus.BAD_REQUEST);
    });
  });
});
