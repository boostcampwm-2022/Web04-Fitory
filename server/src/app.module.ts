import { Module } from "@nestjs/common";
import { APP_FILTER } from "@nestjs/core";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import * as dotenv from "dotenv";
import { HttpExceptionFilter } from "./exception/HttpExceptionFilter";
import { GoogleOauthModule } from "./oauth/google-oauth/google-oauth.module";
import { UserModule } from "./user/user.module";
import { User } from "./typeorm/entities/User";
import { MYSQL_DB, MYSQL_HOST, MYSQL_PASSWORD, MYSQL_USER } from "./utils/env";

dotenv.config();

@Module({
  imports: [
    GoogleOauthModule,
    UserModule,
    TypeOrmModule.forRoot({
      type: "mysql",
      host: MYSQL_HOST,
      port: 3306,
      username: MYSQL_USER,
      password: MYSQL_PASSWORD,
      database: MYSQL_DB,
      entities: [User],
      synchronize: true,
    }),
    PassportModule.register({ session: true }),
  ],

  providers: [{ provide: APP_FILTER, useClass: HttpExceptionFilter }],
})
export class AppModule {}
