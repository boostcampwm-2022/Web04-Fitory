import { PassportStrategy } from "@nestjs/passport";
import { Strategy, VerifyCallback } from "passport-google-oauth20";
import { Inject, Injectable } from "@nestjs/common";
import { Profile } from "passport";
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REDIRECT } from "../../../../utils/env";
import { GoogleOauthService } from "../google-oauth.service";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor(@Inject("AUTH_SERVICE") private readonly googleOauthService: GoogleOauthService) {
    super({
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: GOOGLE_REDIRECT,
      scope: ["profile", "email"],
    });
  }

  async validate(
    _accessToken: string,
    _refreshToken: string,
    profile: Profile,
    done: VerifyCallback,
  ): Promise<any> {
    const { id, displayName } = profile;

    const user = {
      oauthId: id,
      name: displayName,
      // email: emails[0].value,
      // picture: photos[0].value,
    };

    done(null, user);
  }
}
