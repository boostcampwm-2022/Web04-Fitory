import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { google, Auth } from "googleapis";
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from "@utils/env";
import { GoogleUserRegisterDto } from "@oauth/google-oauth/dto/google-user-register.dto";
import { GoogleUserInfoDto } from "@oauth/google-oauth/dto/google-user-info.dto";
import { User } from "@user/entities/user.entity";

@Injectable()
export class GoogleOauthService {
  oauthClient: Auth.OAuth2Client;

  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {
    this.oauthClient = new google.auth.OAuth2(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET);
  }

  async register(userInfo: GoogleUserRegisterDto) {
    const tokenInfo = await this.oauthClient.getTokenInfo(userInfo.access_token);
    const oauthId = tokenInfo.sub.toString();
    const userInfoWithOAuthId = {
      name: userInfo.name,
      age: userInfo.age,
      gender: userInfo.gender,
      height: userInfo.height,
      weight: userInfo.weight,
      oauthId,
    };

    const registerUserInfo = await this.registerUser(userInfoWithOAuthId);

    return this.findUserIdByOAuthId(registerUserInfo.oauthId).then((user) => {
      return user?.id;
    });
  }

  async login(token: string) {
    const tokenInfo = await this.oauthClient.getTokenInfo(token);
    const oauthId = tokenInfo.sub.toString();
    const userId = await this.findUserIdByOAuthId(oauthId).then((user) => {
      return user?.id;
    });

    if (!userId) {
      return { userId: null, needRegister: true };
    }

    return { userId, needRegister: false };
  }

  async registerUser(userInfo: GoogleUserInfoDto) {
    const newUser = this.userRepository.create(userInfo);

    return this.userRepository.save(newUser);
  }

  async findUserIdByOAuthId(oauthId: string) {
    const user = await this.userRepository
      .createQueryBuilder("user")
      .where("user.oauthId = :oauthId", { oauthId })
      .select("user.id")
      .getOne();

    if (!user) {
      return null;
    }
    return user;
  }
}
