import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BestRecordDto } from "./dto/best-record.dto";
import { EveryRecordDto } from "./dto/every-record.dto";
import { SBD_record } from "./entities/sbd_record.entity";

@Injectable()
export class SbdRecordsService {
  constructor(
    @InjectRepository(SBD_record)
    private recordsRepository: Repository<SBD_record>,
  ) {}

  async findEverySBDRecord(userId: number) {
    const recordList = await this.recordsRepository
      .createQueryBuilder("SBD_record")
      .where("SBD_record.user_id = :userId", { userId })
      .orderBy("CAST(SBD_record.date AS SIGNED)", "ASC")
      .getMany();
    return new EveryRecordDto(recordList);
  }

  async findBestSBDRecord(userId: number) {
    const recordList = await this.recordsRepository
      .createQueryBuilder("SBD_record")
      .where("SBD_record.user_id = :userId", { userId })
      .orderBy("SBD_record.SBD_sum", "DESC")
      .getOne();
    if (!recordList) {
      return {
        response: "User Not Exist",
      };
    }
    return new BestRecordDto(recordList);
  }

  async getRecentRecordTime(userId: number) {
    // new Date().getTime() / 1000;
    const record = await this.recordsRepository
      .createQueryBuilder("record")
      .where("record.user_id = :userId", { userId })
      .select("record.time_stamp")
      .orderBy("record.time_stamp", "DESC")
      .getRawMany();

    const recentRecord = record[0];

    return { recentRecord };
  }
}
