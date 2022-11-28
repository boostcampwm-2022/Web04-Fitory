import { BadRequestException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "src/domain/users/entities/user.entity";
import { JwtService } from "@nestjs/jwt";
import { JwtPayload } from "@type/jwt";
import { firstValueFrom } from "rxjs";
import { HttpService } from "@nestjs/axios";
import { GoogleUserDto } from "./dto/google-user.dto";

@Injectable()
export class GoogleOauthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private jwtService: JwtService,
    private readonly httpService: HttpService,
  ) {}

  generateJwt(payload: JwtPayload) {
    return this.jwtService.sign(payload);
  }

  async signIn(user: GoogleUserDto) {
    if (!user) {
      throw new BadRequestException("Unauthenticated");
    }

    return this.generateJwt({
      sub: user.oauthId,
    });
  }

  getUserInfo(accessToken: string) {
    return firstValueFrom(
      this.httpService.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`,
      ),
    );
  }
}
