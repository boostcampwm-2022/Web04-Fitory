/* eslint-disable-next-line @typescript-eslint/ban-types */
import { Inject, Injectable } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";
import { User } from "src/users/entities/user.entity";
import { VerifyCallback } from "passport-google-oauth20";
import { GoogleOauthService } from "../google-oauth.service";
import { JwtPayload } from "../../../types/jwt";

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(@Inject("AUTH_SERVICE") private readonly googleOauthService: GoogleOauthService) {
    super();
  }

  serializeUser(user: User, done: VerifyCallback) {
    console.log("Serializer User");
    done(null, user);
  }

  async deserializeUser(payload: JwtPayload, done: VerifyCallback) {
    const user = await this.googleOauthService.findUserById(payload.sub);
    console.log("Deserialize User");
    console.log(user);
    return user ? done(null, user) : done(null, null);
  }
}
