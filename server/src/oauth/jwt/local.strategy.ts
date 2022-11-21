import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";
import { GoogleOauthService } from "../google-oauth/google-oauth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  // 1
  constructor(private googleOauthService: GoogleOauthService) {
    super();
  }

  // async validate(username: string, password: string): Promise<any> {
  //   console.log("로컬 스트레티지", username);
  //   const user = await this.googleOauthService.validateUser(username, password);
  //   if (!user) {
  //     throw new UnauthorizedException();
  //   }
  //   return user;
  // }
}
