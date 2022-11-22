import { Controller, Get, Inject, Req, Res, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Response } from "express";
import { ApiOperation } from "@nestjs/swagger";
import { GoogleOauthService } from "./google-oauth.service";
import { RequestWithUser } from "../../types/request";

@Controller("api/oauth/google")
export class GoogleOauthController {
  constructor(@Inject("AUTH_SERVICE") private readonly googleOauthService: GoogleOauthService) {}

  @Get()
  @UseGuards(AuthGuard("google"))
  @ApiOperation({
    summary: "구글 로그인 페이지로 리다이렉트",
  })
  googleOAuth() {
    // redirect google login page
    return { msg: "Google Authentication" };
  }

  @Get("callback")
  @UseGuards(AuthGuard("google"))
  @ApiOperation({
    summary: "구글 로그인 callback, 쿠키 생성 후 사용자에게 전송",
  })
  async googleOAuthCallback(@Req() req: RequestWithUser, @Res() res: Response) {
    const token = await this.googleOauthService.signIn(req.user);

    res.cookie("access_token", token, {
      sameSite: true,
      secure: false,
    });

    return res.send(req.user);
  }
}
