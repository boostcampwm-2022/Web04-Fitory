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
    const alarmObject = await this.alarmRepository
      .createQueryBuilder("alarm")
      .select("alarm.sender_user_id", "sender_user_id")
      .addSelect("user.name", "name")
      .addSelect("user.profile_image", "profile_image")
      .addSelect("alarm.check", "check")
      .addSelect("alarm.sender_user_id", "sender_user_id")
      .addSelect("alarm.alarm_type", "alarm_type")
      .addSelect("alarm.time_stamp", "time_stamp")
      .innerJoin(User, "user", "user.user_id = alarm.sender_user_id")
      .where("alarm.user_id = :userId", { userId })
      .getRawMany();
    return HttpResponse.success({
      alarmObject,
    });
  }
}
