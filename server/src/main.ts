import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import cookieParser from "cookie-parser";
import passport from "passport";
import { ValidationPipe } from "@nestjs/common";
import { HttpExceptionFilter } from "@exception/http-exception.filter";
import { PORT } from "@env";
import { AppModule } from "./app.module";
import { initDatabase } from "./utils/initDB";

async function bootstrap() {
  // typeorm.config.ts의 synchronize: true 설정해야 동작
  // initDatabase();

  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter()); // 전역 필터 적용

  app.enableCors({
    origin: ["http://localhost:3000"],
    credentials: true,
  });

  app.use(cookieParser());

  app.use(passport.initialize());

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

  await app.listen(PORT as string);
}
bootstrap();
