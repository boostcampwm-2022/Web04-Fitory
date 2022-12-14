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

describe("User Controller (e2e)", () => {
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

  describe("Get Of User (GET)", () => {
    it("Info Of Single User", () => {
      return request(app.getHttpServer())
        .get("/api/users/get")
        .query({ userId })
        .set({ access_token: accessToken, user_id: userId })
        .expect(HttpStatus.OK);
    });

    it("Profile List Of Every User", () => {
      return request(app.getHttpServer())
        .get(`/api/users/search`)
        .query({ userName: faker.name.lastName() })
        .set({ access_token: accessToken, user_id: userId })
        .expect(HttpStatus.OK);
    });

    it("Recommend User List Of User", async () => {
      await request(app.getHttpServer())
        .get("/api/users/recommand/list")
        .query({ userId })
        .set({ access_token: accessToken, user_id: userId })
        .expect(HttpStatus.OK)
        .then((res) => {
          const { recommendWeight, recommendAge } = res.body.response;
          Object.entries(recommendAge).map(async (item) => {
            const recommendUserId = JSON.parse(JSON.stringify(item[1])).user_id;
            await request(app.getHttpServer())
              .get("/api/users/get")
              .query({ userId: recommendUserId })
              .set({ access_token: accessToken, user_id: userId })
              .then((res) => {
                const recommendedAge = JSON.parse(JSON.stringify(res.body.response.user)).age;
                expect(Math.abs(userInfo.age - recommendedAge)).toBeLessThanOrEqual(1);
              });
          });

          Object.entries(recommendWeight).map(async (item) => {
            const recommendUserId = JSON.parse(JSON.stringify(item[1])).user_id;
            await request(app.getHttpServer())
              .get("/api/users/get")
              .query({ userId: recommendUserId })
              .set({ access_token: accessToken, user_id: userId })
              .then((res) => {
                const recommendedWeight = JSON.parse(JSON.stringify(res.body.response.user)).weight;
                expect(Math.abs(userInfo.weight - recommendedWeight)).toBeLessThanOrEqual(5);
              });
          });
        });
    });
  });

  describe("Check Duplicate User Name (GET)", () => {
    it("No Duplicate", () => {
      const randomName = (Math.floor(Math.random() * 899) + 100).toString();
      return request(app.getHttpServer())
        .get("/api/users/checkName")
        .query({ userName: randomName })
        .set({ access_token: accessToken, user_id: userId })
        .expect(HttpStatus.OK)
        .then((res) => {
          expect(res.body.response.userExists).toBe(false);
        });
    });

    it("Duplicate", () => {
      return request(app.getHttpServer())
        .get("/api/users/checkName")
        .query({ userName: "Jest" })
        .set({ access_token: accessToken, user_id: userId })
        .expect(HttpStatus.OK)
        .then((res) => {
          expect(res.body.response.userExists).toBe(true);
        });
    });
  });

  describe("Update User Info (POST)", () => {
    it("ok", () => {
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

    it("Invalid User Id", () => {
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

    it("Invalid Property", () => {
      const updateUser = {
        userId: 0,
        name: "Jest",
        age: faker.datatype.number({ min: 10, max: 60 }),
        gender: faker.datatype.number({ min: 0, max: 1 }),
        height: "height",
        weight: faker.datatype.number({ min: 50, max: 150 }),
        introduce: "Hi! Im from Jest",
        invalidProperty: "I am Invalid Property",
      };
      return request(app.getHttpServer())
        .post(`/api/users/update`)
        .send(updateUser)
        .set({ access_token: accessToken, user_id: userId })
        .expect(HttpStatus.BAD_REQUEST);
    });

    it("Invalid Property Value", () => {
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
  });

  afterAll((done) => {
    app.close();
    done();
  });
});
