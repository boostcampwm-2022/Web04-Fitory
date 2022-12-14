import { Exception } from "@exception/exceptions";
import { Follow } from "@follow/entities/follow.entity";
import { HttpResponse } from "@converter/response.converter";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "@user/entities/user.entity";
import { Alarm } from "./entities/alram.entity";

@Injectable()
export class AlarmsService {
  constructor(
    @InjectRepository(Alarm)
    private alarmRepository: Repository<Alarm>,
    @InjectRepository(Follow)
    private followRepository: Repository<Follow>,
  ) {}

  async countUnreadAlarm(userId: number) {
    const alarmCount = await this.alarmRepository
      .createQueryBuilder("alarm")
      .where("alarm.user_id = :userId", { userId })
      .andWhere("alarm.check = false")
      .getCount();
    return HttpResponse.success({
      alarmCount,
    });
  }

  async getAlarmList(userId: number, index: number | null) {
    let alarmQueryBuilder = this.alarmRepository
      .createQueryBuilder("alarm")
      .select("alarm.id", "index")
      .addSelect("alarm.sender_user_id", "sender_user_id")
      .addSelect("user.name", "name")
      .addSelect("user.profile_image", "profile_image")
      .addSelect("alarm.check", "check")
      .addSelect("alarm.alarm_type", "alarm_type")
      .addSelect("alarm.time_stamp", "time_stamp")
      .innerJoin(User, "user", "user.user_id = alarm.sender_user_id")
      .where("alarm.user_id = :userId", { userId })
      .andWhere("DATE(alarm.time_stamp) >= DATE_ADD(NOW(), INTERVAL -1 MONTH)")
      .orderBy("alarm.id", "DESC")
      .limit(10);

    if (index) {
      alarmQueryBuilder = alarmQueryBuilder.andWhere("alarm.id < :index", { index });
    }

    const alarmObject = await alarmQueryBuilder.getRawMany();

    await this.checkToReadAlarm(userId);

    return HttpResponse.success({ alarmObject });
  }

  async checkToReadAlarm(userId: number) {
    await this.alarmRepository
      .createQueryBuilder("alarm")
      .update(Alarm)
      .set({ check: true })
      .where("user_id = :userId", { userId })
      .execute();
  }

  async sendFollowAlarm(myUserId: number, otherUserId: number) {
    try {
      await this.alarmRepository.save({
        senderUserId: myUserId,
        alarmType: 1,
        check: false,
        user: { id: otherUserId },
      });
      return HttpResponse.success({
        message: "Follow Alarm Send Success",
      });
    } catch (error) {
      throw new Exception().invalidSubmit();
    }
  }

  async sendExerciseAlarm(senderUserId: number) {
    const followerList = await this.followRepository
      .createQueryBuilder("follow")
      .select("follow.follower_id", "follower_id")
      .where("follow.followed_id = :senderUserId", { senderUserId })
      .andWhere("follow.deleted = false")
      .getRawMany();
    await Promise.all(
      followerList.map(async (row) => {
        await this.alarmRepository.save({
          senderUserId,
          alarmType: 0,
          check: false,
          user: { id: row.follower_id },
        });
      }),
    );
  }
}
