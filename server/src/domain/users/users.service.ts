import { HttpResponse } from "@converter/response.converter";
import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { SBD_record } from "@record/entities/sbd_record.entity";
import { User } from "./entities/user.entity";
import { UsersInfoDto } from "./dto/users-info.dto";

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
    return HttpResponse.success({
      user,
    });
  }

  async getEveryUserProfile() {
    const userProfileList = await this.userRepository
      .createQueryBuilder("user")
      .select(["user.id", "user.name", "user.introduce", "user.profile_image"])
      .getRawMany();

    return HttpResponse.success({
      userProfileList,
    });
  }

  async registerUser(userInfo: UsersInfoDto) {
    try {
      const newUser = this.userRepository.create(userInfo);

      return await this.userRepository.save(newUser);
    } catch {
      throw new InternalServerErrorException();
    }
  }

  async checkUserName(name: string) {
    const userExists = await this.findUserByName(name);

    if (!userExists) throw new Exception().userNotFound();
    return HttpResponse.success({ userExists: true });
  }

  async findUserByName(name: string) {
    const user = await this.userRepository
      .createQueryBuilder("user")
      .where("user.name = :name", { name })
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
      .select("record.second_stamp")
      .orderBy("record.second_stamp", "DESC")
      .getRawMany();

    const recentRecord = record[0];

    return HttpResponse.success({
      recentRecord,
    });
  }

  async getRecommandUserList(userId: number) {
    return HttpResponse.success({});
  }
}
