import { User } from "./../users/entities/user.entity";
import { HttpResponse } from "@converter/response.converter";
import { Follow } from "@follow/entities/follow.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class FollowsService {
  constructor(
    @InjectRepository(Follow)
    private followRepository: Repository<Follow>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async getFollowingUserList(userId: number) {
    const followingUserProfileList = await this.followRepository
      .createQueryBuilder("follow")
      .select("follow.follower_id", "follower_id")
      .addSelect("user.name", "name")
      .addSelect("user.profile_image", "profile_image")
      .addSelect("user.introduce", "introduce")
      .innerJoin(User, "user", "user.user_id = follow.follower_id")
      .where("follow.followed_id = :userId", { userId })
      .andWhere("follow.deleted = false")
      .getRawMany();
    return HttpResponse.success({
      followingUserProfileList,
    });
  }

  async getFollowerUserList(userId: number) {
    const followingUserProfileList = await this.followRepository
      .createQueryBuilder("follow")
      .select("follow.followed_id", "followed_id")
      .addSelect("user.name", "name")
      .addSelect("user.profile_image", "profile_image")
      .addSelect("user.introduce", "introduce")
      .innerJoin(User, "user", "user.user_id = follow.followed_id")
      .where("follow.follower_id = :userId", { userId })
      .andWhere("follow.deleted = false")
      .getRawMany();
    return HttpResponse.success({
      followingUserProfileList,
    });
  }
}
