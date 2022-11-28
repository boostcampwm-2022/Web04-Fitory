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
    const followingObject = await this.followRepository
      .createQueryBuilder("follow")
      .select("follow.follower_id", "follower_id")
      .where("follow.followed_id = :userId", { userId })
      .getRawMany();
    const followingUserProfileList = await Promise.all(
      followingObject.map(async (item) => {
        const following = await this.userRepository
          .createQueryBuilder("user")
          .select("user.name", "name")
          .addSelect("user.profile_image", "profile_image")
          .addSelect("user.introduce", "introduce")
          .where("user.id = :userId", { userId: item.follower_id })
          .getRawOne();
        return {
          userId: item.follower_id,
          userName: following.name,
          profileImage: following.profile_image,
          introduce: following.introduce,
        };
      }),
    );
    return HttpResponse.success({
      followingUserProfileList,
    });
  }

  async getFollowerUserList(userId: number) {
    return HttpResponse.success({});
  }
}
