import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Inject,
  Post,
  Req,
  Res,
  UseInterceptors,
} from "@nestjs/common";
import { Response, Request } from "express";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { HttpResponse } from "@converter/response.converter";
import { AccessTokenDto } from "@oauth/google-oauth/dto/access-token.dto";
import { JwtService } from "@nestjs/jwt";
import { GoogleOauthService } from "./google-oauth.service";

@Controller("api/oauth/google")
@UseInterceptors(ClassSerializerInterceptor)
@ApiTags("OAUTH API")
export class GoogleOauthController {
  constructor(
    @Inject("AUTH_SERVICE") private readonly googleOauthService: GoogleOauthService,
    private jwtService: JwtService,
  ) {}

  @Post("register")
  @ApiOperation({
    summary: "구글 로그인, 쿠키 생성 후 사용자에게 전송",
  })
  async googleOAuthRegister(
    @Body() accessToken: AccessTokenDto,
    @Res() res: Response,
    @Req() req: Request,
  ) {
    const data = await this.googleOauthService.register(accessToken.access_token);

    const token = this.jwtService.sign({ sub: data.oauthId });

    res.cookie("access_token", token, {
      sameSite: true,
      secure: false, // 배포시에는 true로 바꿔야됨
      httpOnly: true,
      maxAge: 2 * 60 * 60 * 1000, // (2 hours) 나중에 maxAge 합의 필요
    });

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
