import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";
import { GoogleUserDto } from "../oauth/google-oauth/dto/google-user.dto";
import { UsersInfoDto } from "./dto/users-info.dto";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async getUserInfo(userId: number) {
    const user = await this.userRepository.findOneBy({ id: userId });

    if (!user) {
      return "No user find";
    }
    return user;
  }

  async findEveryUserName() {
    const userList = await this.userRepository.find();
    return {
      nameList: userList.map((row) => row.name),
    };
  }

  async registerUser(userInfo: UsersInfoDto) {
    try {
      const userExists = await this.findUserById(userInfo.oauthId);

      if (userExists) return userExists;

      const newUser = this.userRepository.create(userInfo);

      return await this.userRepository.save(newUser);
    } catch {
      throw new InternalServerErrorException();
    }
  }

  async findUserById(oauthId: string) {
    const user = await this.userRepository.findOneBy({ oauthId });

    if (!user) {
      return null;
    }

    return user;
  }
}
