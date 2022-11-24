import { HttpResponse } from "@converter/response.converter";
import { Alarm } from "./entities/alram.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

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
    return HttpResponse.success({});
  }
}
