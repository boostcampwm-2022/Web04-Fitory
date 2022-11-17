import { Controller, Get, Inject, Req, UseGuards } from "@nestjs/common";
import { GoogleOauthService } from "./google-oauth.service";
import { GoogleOAuthGuard } from "./utils/google.guards";
import { RequestType } from "../../types/request.type";

@Controller("api/oauth/google")
export class GoogleOauthController {
  constructor(@Inject("AUTH_SERVICE") private readonly googleOauthService: GoogleOauthService) {}

  @Get()
  @UseGuards(GoogleOAuthGuard)
  googleOAuth() {
    // redirect google login page
    return { msg: "Google Authentication" };
  }

  @Get("callback")
  @UseGuards(GoogleOAuthGuard)
  googleOAuthCallback(@Req() request: RequestType) {
    return this.googleOauthService.googleLogin(request);
  }

  @Get("status")
  user(@Req() request: RequestType) {
    console.log(request.user);
    if (request.user) {
      return { msg: "Authenticated" };
    }
    return { msg: "Not Authenticated" };
  }
}
