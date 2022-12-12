import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "@user/entities/user.entity";
import { JwtModule } from "@nestjs/jwt";
import { ACCESS_TOKEN_EXPIRESIN, ACCESS_TOKEN_SECRETKEY } from "@utils/env";
import { GoogleOauthController } from "./google-oauth.controller";
import { GoogleOauthService } from "./google-oauth.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: ACCESS_TOKEN_SECRETKEY,
      signOptions: { expiresIn: ACCESS_TOKEN_EXPIRESIN },
    }),
  ],
  controllers: [GoogleOauthController],
  providers: [
    {
      provide: "AUTH_SERVICE",
      useClass: GoogleOauthService,
    },
  ],
})
export class GoogleOauthModule {}
