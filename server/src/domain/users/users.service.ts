import { HttpResponse } from "@converter/response.converter";
import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { SBD_record } from "@record/entities/sbd_record.entity";
import { Exception } from "@exception/exceptions";
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
      throw new Exception().userNotFound();
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

  async getRecommandUserList(userId: number) {
    const weight = await this.userRepository
      .createQueryBuilder("user")
      .where("user.user_id = :userId", { userId })
      .select("user.weight")
      .getRawOne();

    const age = await this.userRepository
      .createQueryBuilder("user")
      .where("user.user_id = :userId", { userId })
      .select("user.age")
      .getRawOne();

    const recommendWeight = await this.userRepository
      .createQueryBuilder("user")
      .where(`user.weight BETWEEN ${weight.user_weight - 5} AND ${weight.user_weight + 5}`)
      .select("user.name")
      .addSelect("user.profile_image")
      .orderBy("rand()")
      .take(5)
      .getRawMany();

    const recommendAge = await this.userRepository
      .createQueryBuilder("user")
      .where(`user.age BETWEEN ${age.user_age - 1} AND ${age.user_age + 1}`)
      .select("user.name")
      .addSelect("user.profile_image")
      .orderBy("rand()")
      .take(5)
      .getRawMany();

    return HttpResponse.success({ recommendWeight, recommendAge });
  }
}
