/* eslint-disable-next-line @typescript-eslint/ban-types */
import { Inject, Injectable } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";
import { GoogleOauthService } from "../google-oauth.service";
import { User } from "../../../typeorm/entities/User";

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(@Inject("AUTH_SERVICE") private readonly googleOauthService: GoogleOauthService) {
    super();
  }

  serializeUser(user: User, done: Function) {
    console.log("Serializer User");
    done(null, user);
  }

  async deserializeUser(payload: any, done: Function) {
    const user = await this.googleOauthService.findUser(payload.id);
    console.log("Deserialize User");
    console.log(user);
    return user ? done(null, user) : done(null, null);
  }
}
