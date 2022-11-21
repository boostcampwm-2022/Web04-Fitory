import { Controller, Get, Inject, Req, Res, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Response } from "express";
import { GoogleOauthService } from "./google-oauth.service";
import { RequestWithUser } from "../../types/request";

@Controller("api/oauth/google")
export class GoogleOauthController {
  constructor(@Inject("AUTH_SERVICE") private readonly googleOauthService: GoogleOauthService) {}

  @Get()
  @UseGuards(AuthGuard("google"))
  googleOAuth() {
    // redirect google login page
    return { msg: "Google Authentication" };
  }

  @Get("callback")
  @UseGuards(AuthGuard("google"))
  async googleOAuthCallback(@Req() req: RequestWithUser, @Res() res: Response) {
    const token = await this.googleOauthService.signIn(req.user);

    res.cookie("access_token", token, {
      sameSite: true,
      secure: false,
    });

    return res.send(req.user);
  }
}
