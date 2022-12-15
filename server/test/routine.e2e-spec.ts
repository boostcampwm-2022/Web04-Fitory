import { Routine } from "@routine/entities/routine.entity";
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

interface ExerciseSet {
  routineId: number;
  exerciseName: string;
  set: { index: number; kg: number; count: number }[];
}

describe("Routine Controller (e2e)", () => {
  global.alarmBar = new Set();

  let app: INestApplication;
  let accessToken: string;
  const userId: number = Math.floor(Math.random() * 4000) + 1;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forFeature([User, Routine]),
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

  describe("Save Routine (POST)", () => {
    it("Duplicate Routine Name Test", async () => {
      const testUserId = Math.floor(Math.random() * 1000) + 4000;
      const randomRoutineName = (Math.floor(Math.random() * 800) + 100).toString();
      const routine = {
        userId: testUserId,
        routineName: randomRoutineName,
        exerciseList: [
          {
            exerciseName: "Jest Exercise A",
            setList: [
              { kg: 50, count: 7 },
              { kg: 50, count: 7 },
              { kg: 50, count: 7 },
            ],
          },
          {
            exerciseName: "Jest Exercise B",
            setList: [
              { kg: 15, count: 15 },
              { kg: 15, count: 15 },
              { kg: 15, count: 15 },
              { kg: 15, count: 15 },
              { kg: 15, count: 15 },
            ],
          },
        ],
      };
      await request(app.getHttpServer())
        .post("/api/routines/save")
        .send(routine)
        .set({ access_token: accessToken, user_id: userId })
        .expect(HttpStatus.CREATED);

      await request(app.getHttpServer())
        .post("/api/routines/save")
        .send(routine)
        .set({ access_token: accessToken, user_id: userId })
        .expect(HttpStatus.FORBIDDEN);
    });

    it("Invalid Property Test", async () => {
      const randomRoutineName = (Math.floor(Math.random() * 800) + 100).toString();
      const routine = {
        userId,
        routineName: randomRoutineName,
        exerciseList: [
          {
            exerciseName: "Jest Exercise A",
            setList: [{ kg: 50, count: 7, invalidProperty: "I am Invalid Property" }],
          },
        ],
      };
      await request(app.getHttpServer())
        .post("/api/routines/save")
        .send(routine)
        .set({ access_token: accessToken, user_id: userId })
        .expect(HttpStatus.BAD_REQUEST);
    });

    it("Routine Update Test", async () => {
      const testUserId = Math.floor(Math.random() * 1000) + 4000;
      const randomRoutineName = (Math.floor(Math.random() * 800) + 100).toString();
      const updateKg = 500;
      const routine = {
        userId: testUserId,
        routineName: randomRoutineName,
        exerciseList: [
          {
            exerciseName: "Jest Exercise A",
            setList: [{ kg: 50, count: 7 }],
          },
          {
            exerciseName: "Jest Exercise B",
            setList: [{ kg: 15, count: 15 }],
          },
        ],
      };
      await request(app.getHttpServer())
        .post("/api/routines/save")
        .send(routine)
        .set({ access_token: accessToken, user_id: userId })
        .expect(HttpStatus.CREATED);

      const routineIdList = await request(app.getHttpServer())
        .get("/api/routines/single")
        .query({ userId: testUserId, routineName: randomRoutineName })
        .set({ access_token: accessToken, user_id: userId })
        .then((res) => {
          const { routine } = res.body.response;
          const routineObject = JSON.parse(JSON.stringify(routine));
          return routineObject.map((item: ExerciseSet) => {
            return item.routineId;
          });
        });

      const updateExerciseList = routine.exerciseList.map((item, index) => {
        item.setList[0].kg = updateKg;
        return { ...item, routineId: routineIdList[index] };
      });
      const updateRoutine = {
        userId: routine.userId,
        routineName: routine.routineName,
        exerciseList: updateExerciseList,
      };

      await request(app.getHttpServer())
        .post("/api/routines/update")
        .send(updateRoutine)
        .set({ access_token: accessToken, user_id: userId })
        .expect(HttpStatus.CREATED);

      await request(app.getHttpServer())
        .get("/api/routines/single")
        .query({ userId: testUserId, routineName: randomRoutineName })
        .set({ access_token: accessToken, user_id: userId })
        .then((res) => {
          const { routine } = res.body.response;
          const routineObject = JSON.parse(JSON.stringify(routine));
          routineObject.map((item: ExerciseSet) => {
            item.set.map((setItem) => {
              expect(setItem.kg).toBe(500);
            });
          });
        });
    });

    it("Routine Delete Test", async () => {
      const testUserId = Math.floor(Math.random() * 1000) + 4000;
      const randomRoutineName = (Math.floor(Math.random() * 800) + 100).toString();
      const routine = {
        userId: testUserId,
        routineName: randomRoutineName,
        exerciseList: [
          {
            exerciseName: "Jest Exercise A",
            setList: [{ kg: 50, count: 7 }],
          },
          {
            exerciseName: "Jest Exercise B",
            setList: [{ kg: 15, count: 15 }],
          },
        ],
      };
      await request(app.getHttpServer())
        .post("/api/routines/save")
        .send(routine)
        .set({ access_token: accessToken, user_id: userId })
        .expect(HttpStatus.CREATED);

      await request(app.getHttpServer())
        .get("/api/routines/delete")
        .query({ userId: testUserId, routineName: randomRoutineName })
        .set({ access_token: accessToken, user_id: userId })
        .expect(HttpStatus.OK);
    });
  });

  afterAll((done: () => void) => {
    app.close();
    done();
  });
});
