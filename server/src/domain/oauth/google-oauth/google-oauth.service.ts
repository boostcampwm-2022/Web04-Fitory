import { BadRequestException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "src/domain/users/entities/user.entity";
import { JwtService } from "@nestjs/jwt";
import { JwtPayload } from "@type/jwt";
import { GoogleUserDto } from "./dto/google-user.dto";

@Injectable()
export class GoogleOauthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  generateJwt(payload: JwtPayload) {
    return this.jwtService.sign(payload);
  }

  async signIn(user: GoogleUserDto) {
    if (!user) {
      throw new BadRequestException("Unauthenticated");
    }

    const userExists = await this.findUserById(user.oauthId);

    if (!userExists) {
      return this.registerUser(user);
    }

    return this.generateJwt({
      sub: userExists.oauthId,
    });
  }

  async registerUser(user: GoogleUserDto) {
    try {
      return this.generateJwt({
        sub: user.oauthId,
      });
    } catch {
      throw new InternalServerErrorException();
    }
  }

  async findUserById(oauthId: string) {
    const user = await this.userRepository
      .createQueryBuilder("user")
      .where("user.oauth_id = :oauthId", { oauthId })
      .getOne();

    if (!user) {
      return null;
    }

    return user;
  }
}
