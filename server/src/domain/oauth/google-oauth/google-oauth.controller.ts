import { Body, Controller, Get, Inject, Post, Req, Res } from "@nestjs/common";
import { Response, Request } from "express";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { HttpResponse } from "@converter/response.converter";
import { AccessTokenDto } from "@oauth/google-oauth/dto/access-token.dto";
import { JwtService } from "@nestjs/jwt";
import { GoogleUserRegisterDto } from "@oauth/google-oauth/dto/google-user-register.dto";
import { GoogleOauthService } from "./google-oauth.service";

@Controller("api/oauth/google")
@ApiTags("OAUTH API")
export class GoogleOauthController {
  constructor(
    @Inject("AUTH_SERVICE") private readonly googleOauthService: GoogleOauthService,
    private jwtService: JwtService,
  ) {}

  @Post("register")
  @ApiOperation({
    summary: "회원가입, 쿠키 생성 후 사용자에게 전송",
  })
  async googleOAuthRegister(@Body() userInfo: GoogleUserRegisterDto, @Req() req: Request) {
    const userId = await this.googleOauthService.register(userInfo);

    const token = this.jwtService.sign({ userId });

    req.res.cookie("access_token", token, {
      sameSite: true,
      secure: false, // 배포시에는 true로 바꿔야됨
      httpOnly: true,
      maxAge: 2 * 60 * 60 * 1000, // (2 hours) 나중에 maxAge 합의 필요
    });

    return HttpResponse.success({ userId });
  }

  @Post("login")
  @ApiOperation({
    summary: "로그인, 쿠키 생성 후 사용자에게 전송",
  })
  async googleOAuthLogin(@Body() accessToken: AccessTokenDto, @Req() req: Request) {
    const data = await this.googleOauthService.login(accessToken.access_token);

    if (!data.needRegister) {
      const token = this.jwtService.sign({ userId: data.userId });

      req.res.cookie("access_token", token, {
        sameSite: true,
        secure: false, // 배포시에는 true로 바꿔야됨
        httpOnly: true,
        maxAge: 2 * 60 * 60 * 1000, // (2 hours) 나중에 maxAge 합의 필요
      });
    }

    return HttpResponse.success(data);
  }

  @Get("logout")
  @ApiOperation({
    summary: "구글 로그아웃, access_token 제거",
  })
  googleOAuthLogout(@Res() res: Response) {
    return res.clearCookie("access_token").send("logout success");
  }
}
