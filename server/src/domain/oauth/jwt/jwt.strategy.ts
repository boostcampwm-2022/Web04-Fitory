import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Request } from "express";
import { User } from "@user/entities/user.entity";
import { ACCESS_TOKEN_SECRETKEY } from "@env";
import { JwtPayload } from "@type/jwt";
import { Exception } from "@exception/exceptions";

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
    const userId = await this.userRepository
      .createQueryBuilder("user")
      .where("user.id = :userId", { userId: payload.userId })
      .select("user.id")
      .getOne();

    if (!userId) throw new Exception().Unauthorized();

    return userId;
  }
}
