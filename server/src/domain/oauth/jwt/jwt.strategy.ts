import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Request } from "express";
import { User } from "../../users/entities/user.entity";
import { ACCESS_TOKEN_SECRETKEY } from "../../../utils/env";
import { JwtPayload } from "../../../types/jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, "jwt") {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {
    const extractJwtFromCookie = (req: Request) => {
      let token = null;
      if (req && req.cookies) {
        token = req.cookies.access_token;
      }
      return token || ExtractJwt.fromAuthHeaderAsBearerToken()(req);
    };

    super({
      ignoreExpiration: false,
      secretOrKey: ACCESS_TOKEN_SECRETKEY,
      jwtFromRequest: extractJwtFromCookie,
    });
  }

  async validate(payload: JwtPayload) {
    const user = await this.userRepository.findOneBy({ oauthId: payload.sub });

    if (!user) throw new UnauthorizedException("Please log in to continue");

    return {
      oauthId: payload.sub,
    };
  }
}
