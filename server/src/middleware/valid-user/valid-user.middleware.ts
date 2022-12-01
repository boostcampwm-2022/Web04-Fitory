import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { JwtService } from "@nestjs/jwt";
import { ACCESS_TOKEN_SECRETKEY } from "@env";
import { Exception } from "@exception/exceptions";

@Injectable()
export class ValidUserMiddleware implements NestMiddleware {
  constructor(private readonly jwtService: JwtService) {}

  use(req: Request, res: Response, next: NextFunction) {
    try {
      const accessToken = req.cookies.access_token;
      console.log("middleware", accessToken);

      if (accessToken) {
        const decodedToken = this.jwtService.verify(accessToken, {
          secret: ACCESS_TOKEN_SECRETKEY,
        });
        console.log(decodedToken);

        // req.headers("userId") === decodedToken;

        const { userId } = decodedToken;
        console.log("middleware", userId);
      }
    } catch (error) {
      console.log(error);
      throw new Exception().Unauthorized();
    }

    next();
  }
}
