import { NestFactory } from "@nestjs/core";
import session from "express-session";
import passport from "passport";
import { AppModule } from "./app.module";
import { HttpExceptionFilter } from "./exception/HttpExceptionFilter";
import { PORT } from "./utils/env";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter()); // 전역 필터 적용

  app.use(
    session({
      secret: process.env.ACCESS_TOKEN_SECRETKEY as string,
      saveUninitialized: false,
      resave: false,
      cookie: {
        maxAge: 60000,
      },
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(PORT as string);
}
bootstrap();
