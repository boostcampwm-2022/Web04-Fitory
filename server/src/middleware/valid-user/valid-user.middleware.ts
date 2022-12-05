import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { JwtService } from "@nestjs/jwt";
import { ACCESS_TOKEN_SECRETKEY } from "@env";
import { Exception } from "@exception/exceptions";

@Injectable()
export class ValidUserMiddleware implements NestMiddleware {
  constructor(private readonly jwtService: JwtService) {}

  use(req: Request, res: Response, next: NextFunction) {
    // const accessToken = req.cookies.access_token;

    // if (!accessToken) {
    //   throw new Exception().Unauthorized();
    // }
    // const decodedToken = this.jwtService.verify(accessToken, {
    //   secret: ACCESS_TOKEN_SECRETKEY,
    // });
    // const { userId } = decodedToken;

    // if (req.headers.userId !== userId) {
    //   throw new Exception().invalidUserIdError();
    // }
    next();
  }
}
