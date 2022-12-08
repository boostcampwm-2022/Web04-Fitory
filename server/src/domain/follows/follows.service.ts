import { FollowUserIdDto } from "./dto/follow.dto";
import { Exception } from "@exception/exceptions";
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

  async getFollowerCount(userId: number) {
    return this.followRepository.count({ where: { followedId: userId } });
  }

  async getFollowingCount(userId: number) {
    return this.followRepository.count({ where: { followerId: userId } });
  }

  async getFollowingUserList(userId: number) {
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

  async getFollowerUserList(userId: number) {
    const followerUserProfileList = await this.followRepository
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
      followerUserProfileList,
    });
  }

  async doFollow(userIds: FollowUserIdDto) {
    try {
      const followRelation = await this.getFollowRelation(userIds);
      if (!followRelation) {
        // 첫 팔로우
        await this.followRepository.save({
          followerId: userIds.myUserId,
          followedId: userIds.otherUserId,
          deleted: false,
        });
      } else {
        // 취소 했지만 다시 팔로우
        followRelation.deleted = false;
        await this.followRepository.save(followRelation);
      }
      global.alarmBar.add(userIds.otherUserId);

      return HttpResponse.success({
        message: "Do Follow Request Success",
      });
    } catch (error) {
      throw new Exception().invalidSubmit();
    }
  }

  async cancelFollow(userIds: FollowUserIdDto) {
    try {
      const followRelation = await this.getFollowRelation(userIds);
      followRelation.deleted = true;
      await this.followRepository.save(followRelation);
      return HttpResponse.success({
        message: "Follow Cancel Success",
      });
    } catch (error) {
      // 팔로우 관계가 아닌데 취소할 경우
      throw new Exception().invalidDelete();
    }
  }

  async getFollowRelation(userIds: FollowUserIdDto) {
    const relation = await this.followRepository
      .createQueryBuilder("follow")
      .where("follow.follower_id = :myUserId", { myUserId: userIds.myUserId })
      .andWhere("follow.followed_id = :otherUserId", { otherUserId: userIds.otherUserId })
      .getOne();
    return relation;
  }
}
