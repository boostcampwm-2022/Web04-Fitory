import { Controller, Get, Inject, Req, Res, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Response } from "express";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { GoogleOauthService } from "./google-oauth.service";
import { RequestWithUser } from "../../../types/request";

@Controller("api/oauth/google")
@ApiTags("OAUTH API")
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
      secure: false, // 배포시에는 true로 바꿔야됨
      httpOnly: true,
      maxAge: 2 * 60 * 60 * 1000, // (2 hours) 나중에 maxAge 합의 필요
    });

    return res.send(req.user);
  }

  @Get("logout")
  @ApiOperation({
    summary: "구글 로그아웃, access_token 제거",
  })
  googleOAuthLogout(@Res() res: Response) {
    return res.clearCookie("access_token").send("logout success");
  }
}
