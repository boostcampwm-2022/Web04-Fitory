import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";
import { GoogleUserDto } from "../oauth/google-oauth/dto/google-user.dto";
import { UsersInfoDto } from "./dto/users-info.dto";
import { SBD_record } from "../sbd_records/entities/sbd_record.entity";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(SBD_record)
    private recordsRepository: Repository<SBD_record>,
  ) {}

  async getUserInfo(userId: number) {
    const user = await this.userRepository
      .createQueryBuilder("user")
      .where("user.id = :userId", { userId })
      .getOne();

    if (!user) {
      return "No user find";
    }
    return user;
  }

  async findEveryUserName() {
    const userList = await this.userRepository
      .createQueryBuilder("user")
      .select("user.name")
      .getMany();

    return { userList };
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
    const user = await this.userRepository
      .createQueryBuilder("user")
      .where("user.oauthId = :oauthId", { oauthId })
      .getOne();

    if (!user) {
      return null;
    }

    return user;
  }

  async getRecentRecordTime(userId: number) {
    // new Date().getTime() / 1000;
    const record = await this.recordsRepository
      .createQueryBuilder("record")
      .where("record.user_id = :userId", { userId })
      .select("record.time_stamp")
      .orderBy("record.time_stamp", "DESC")
      .getRawMany();

    const recentRecord = record[0];

    return { recentRecord };
  }
}
