import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-google-oauth20";
import { Inject, Injectable } from "@nestjs/common";
import { Profile } from "passport";
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REDIRECT } from "../../../utils/env";
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

  async validate(accessToken: string, refreshToken: string, profile: Profile) {
    const user = await this.googleOauthService.validateUser({
      name: profile.displayName,
      email: profile.emails[0].value, // 엄격한 null 검사 사용 해제
      profileImage: profile.photos[0].value,
      accessToken: accessToken || "NO accessToken",
      refreshToken: refreshToken || "NO refreshToken",
    });
    console.log("Validate");
    console.log(user);
    return user || null;
  }
}
