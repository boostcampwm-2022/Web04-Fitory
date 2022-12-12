import { Test, TestingModule } from "@nestjs/testing";
import { HttpStatus, INestApplication, ValidationPipe } from "@nestjs/common";
import request from "supertest";
import { AppModule } from "../src/app.module";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { ACCESS_TOKEN_EXPIRESIN, ACCESS_TOKEN_SECRETKEY, GOOGLE_CLIENT_ID } from "../src/utils/env";
import cookieParser from "cookie-parser";
import { User } from "../src/domain/users/entities/user.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeormConfig } from "../src/config/typeorm.config";
import { HttpResponse } from "../src/converter/response.converter";

const getAccessToken = async (moduleFixture: TestingModule): Promise<[number, string]> => {
  const jwtService = moduleFixture.get<JwtService>(JwtService);
  const userId = Math.floor(Math.random() * 5000) + 1;
  const accessToken = jwtService.sign({ userId: userId }); // jsonwebtoken 패키지 로직을 테스트하는 꼴이 됨

  return [userId, accessToken];
};

describe("RoutinesController (e2e)", () => {
  let app: INestApplication;
  let accessToken: string;
  let userId: number;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(typeormConfig),
        AppModule,
        JwtModule.register({
          secret: ACCESS_TOKEN_SECRETKEY,
          signOptions: { expiresIn: ACCESS_TOKEN_EXPIRESIN },
        }),
      ],
      providers: [JwtService],
    }).compile();

    [userId, accessToken] = await getAccessToken(moduleFixture);

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

  describe("/api/users/update (POST)", () => {
    const updateUser = {
      userId: 2,
      name: "Jest",
      age: 20,
      gender: 0,
      height: 180,
      weight: 70,
      introduce: "Hi im Jest",
    };

    it("POST", () => {
      return request(app.getHttpServer())
        .post(`/api/users/update`)
        .send(updateUser)
        .set({ access_token: accessToken, user_id: userId })
        .expect(HttpStatus.CREATED);
    });
  });
});
