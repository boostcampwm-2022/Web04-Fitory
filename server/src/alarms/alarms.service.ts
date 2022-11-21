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
    const alarmCount = await this.alarmRepository.count({
      where: [{ receiverUserId: userId }, { check: true }],
    });
    return { alarmCount };
  }
}
