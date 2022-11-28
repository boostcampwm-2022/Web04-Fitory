import { HttpResponse } from "@converter/response.converter";
import { Alarm } from "./entities/alram.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "@user/entities/user.entity";

@Injectable()
export class AlarmsService {
  constructor(
    @InjectRepository(Alarm)
    private alarmRepository: Repository<Alarm>,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async countUnreadAlarm(userId: number) {
    const alarmCount = await this.alarmRepository
      .createQueryBuilder("alarm")
      .where("alarm.user_id = :userId", { userId })
      .getCount();
    return HttpResponse.success({
      alarmCount,
    });
  }

  async getAlarmList(userId: number) {
    const senderUserIdObject = await this.alarmRepository
      .createQueryBuilder("alarm")
      .select("alarm.sender_user_id", "sender_user_id")
      .addSelect("alarm.alarm_type", "alarm_type")
      .addSelect("alarm.time_stamp", "time_stamp")
      .addSelect("alarm.check", "check")
      .where("alarm.user_id = :userId", { userId })
      .getRawMany();
    const result = await Promise.all(
      senderUserIdObject.map(async (item) => {
        const userInfo = await this.usersRepository
          .createQueryBuilder("user")
          .select("user.name", "name")
          .addSelect("user.profile_image", "profile_image")
          .where("user.user_id = :senderUserId", { senderUserId: item.sender_user_id })
          .getRawOne();
        return {
          ...item,
          senderName: userInfo.name,
          senderProfileImage: userInfo.profile_image,
        };
      }),
    );
    return HttpResponse.success({
      result,
    });
  }
}
