import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../../typeorm/entities/User";
import { GoogleUserInfoType } from "../../types/user.type";
import { RequestType } from "../../types/request.type";

@Injectable()
export class GoogleOauthService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

  async validateUser(googleUserInfo: GoogleUserInfoType) {
    console.log("GoogleOauthService");
    console.log(googleUserInfo);
    const user = await this.userRepository.findOneBy({ email: googleUserInfo.email });
    console.log(user);
    if (user) return user;
    console.log("User not found. Creating...");
    const newUser = this.userRepository.create(googleUserInfo);
    return this.userRepository.save(newUser);
  }

  async findUser(id: number) {
    const user = await this.userRepository.findOneBy({ id });
    return user;
  }

  googleLogin(request: RequestType) {
    if (!request.user) {
      return "No user from google";
    }

    return {
      message: "User information from google",
      user: request.user,
    };
  }
}
