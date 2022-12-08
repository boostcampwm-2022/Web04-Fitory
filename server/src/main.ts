import { NestFactory, Reflector } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import cookieParser from "cookie-parser";
import passport from "passport";
import { ValidationPipe } from "@nestjs/common";
import { HttpExceptionFilter } from "@exception/http-exception.filter";
import { DEPLOY_HOST, DEPLOY_HOST_WWW, LOCAL_HOST, PORT } from "@env";
import express from "express";
import path from "path";
import { NestExpressApplication } from "@nestjs/platform-express";
import { JwtAuthGuard } from "@guard/jwt.guard";
import { initDatabase } from "./utils/initDB";
import { AppModule } from "./app.module";
import { SetResponseHeader } from "./middleware/zero-downtime-deploy/set-response-header.middleware";
import { GlobalService } from "./middleware/zero-downtime-deploy/is-disable-keep-alive.global";

async function bootstrap() {
  // typeorm.config.ts의 synchronize: true 설정해야 동작
  // initDatabase();

  const app: NestExpressApplication = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useGlobalFilters(new HttpExceptionFilter()); // 전역 필터 적용

  app.use("/user_profiles", express.static(path.join(__dirname, "../user_profiles")));

  app.enableCors({
    origin: [DEPLOY_HOST, DEPLOY_HOST_WWW],
    methods: ["GET", "POST", "OPTIONS"],
    credentials: true,
  });

  app.use(cookieParser());

  app.use(passport.initialize());

  const reflector = app.get(Reflector);
  // app.useGlobalGuards(new JwtAuthGuard(reflector)); // 전역 user id 검증 가드 적용

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // DTO에 없는 값은 거르고 에러메세지 출력
      forbidNonWhitelisted: true, // DTO에 존재하지않는 값이 들어오면 에러메세지출력
      transform: true, // 넘어오는값은 무조건 String이라 하나하나 원하는 타입으로 바꿔줘야하는데 이런 불편함을 없애줌
    }),
  );

  const swaggerDocumentBuilder = new DocumentBuilder()
    .setTitle("Fitory's API Docs")
    .setDescription("Fitory API description")
    .setVersion("1.0")
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerDocumentBuilder);
  SwaggerModule.setup("api", app, swaggerDocument);

  GlobalService.isDisableKeepAlive = false;

  app.use(SetResponseHeader);

  // Starts listening to shutdown hooks
  app.enableShutdownHooks();

  await app.listen(PORT as string, () => {
    process.send("ready");
    console.log(`application is listening on port ${PORT}`);
  });
}
bootstrap();
