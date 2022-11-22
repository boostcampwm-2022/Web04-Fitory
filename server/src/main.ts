import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import cookieParser from "cookie-parser";
import session from "express-session";
import passport from "passport";
import { AppModule } from "./app.module";
import { HttpExceptionFilter } from "./exception/HttpExceptionFilter";
import { PORT } from "./utils/env";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter()); // 전역 필터 적용

  app.enableCors({
    origin: ["http://localhost:8080"],
    credentials: true,
  });

  app.use(cookieParser());

  app.use(passport.initialize());

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
