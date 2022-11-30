import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "src/domain/users/entities/user.entity";
import { google, Auth } from "googleapis";
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from "@env";

@Injectable()
export class GoogleOauthService {
  oauthClient: Auth.OAuth2Client;

  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {
    this.oauthClient = new google.auth.OAuth2(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET);
  }

  async register(token: string) {
    const tokenInfo = await this.oauthClient.getTokenInfo(token);
    const oauthId = tokenInfo.sub.toString();
    const user = await this.findUserById(oauthId);

    if (!user) {
      return { oauthId, register: true };
    }

    return { oauthId, register: false };
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
