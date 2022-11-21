import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GoogleOauthController } from "./google-oauth.controller";
import { GoogleStrategy } from "./utils/google.strategy";
import { GoogleOauthService } from "./google-oauth.service";
import { SessionSerializer } from "./utils/google.serializer";
import { User } from "src/users/entities/user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [GoogleOauthController],
  providers: [
    GoogleStrategy,
    SessionSerializer,
    {
      provide: "AUTH_SERVICE",
      useClass: GoogleOauthService,
    },
  ],
})
export class GoogleOauthModule {}
