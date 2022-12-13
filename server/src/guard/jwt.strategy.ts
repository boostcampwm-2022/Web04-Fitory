import { Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";
import { Request } from "express";
import { ACCESS_TOKEN_SECRETKEY } from "@utils/env";
import { JwtPayload } from "@type/jwt";
import { Exception } from "@exception/exceptions";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, "jwt") {
  constructor() {
    const extractJwtFromCookie = (req: Request) => {
      let token = null;
      if (req && req.cookies) {
        token = req.cookies.access_token;
      }
      return token;
    };

    super({
      ignoreExpiration: false,
      secretOrKey: ACCESS_TOKEN_SECRETKEY,
      jwtFromRequest: extractJwtFromCookie,
    });
  }

  async validate(payload: JwtPayload) {
    if (!payload.userId) throw new Exception().Unauthorized();

    return payload.userId;
  }
}
