import { HttpResponse } from "@converter/response.converter";
import { Exception } from "@exception/exceptions";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async isExistUser(userId: number) {
    // const userExist = await this.userRepository
    //   .createQueryBuilder("user")
    //   .where("user.user_id = :userId", { userId })
    //   .getOne();
    // return userExist ? true : false;
    return true;
  }

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
      .select("user.user_id", "user_id")
      .addSelect("user.name", "name")
      .addSelect("user.introduce", "introduce")
      .addSelect("user.profile_image", "profile_image")
      .getRawMany();

    return HttpResponse.success({
      userProfileList,
    });
  }

  async checkUserName(name: string) {
    const userExists = await this.findUserByName(name);
    return HttpResponse.success({ userExists });
  }

  async findUserByName(name: string) {
    const user = await this.userRepository
      .createQueryBuilder("user")
      .where("user.name = :name", { name })
      .getOne();
    return !!user;
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
      .andWhere("user.user_id != :userId", { userId })
      .select("user.user_id", "user_id")
      .addSelect("user.name", "name")
      .addSelect("user.profile_image")
      .orderBy("rand()")
      .take(5)
      .getRawMany();

    const recommendAge = await this.userRepository
      .createQueryBuilder("user")
      .where(`user.age BETWEEN ${age.user_age - 1} AND ${age.user_age + 1}`)
      .andWhere("user.user_id != :userId", { userId })
      .select("user.user_id", "user_id")
      .addSelect("user.name", "name")
      .addSelect("user.profile_image")
      .orderBy("rand()")
      .take(5)
      .getRawMany();

    return HttpResponse.success({ recommendWeight, recommendAge });
  }
}
