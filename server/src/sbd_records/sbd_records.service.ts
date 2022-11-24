import { Exception } from "src/exception/exceptions";
import { recordConverter } from "./converter/sbd_records.converter";
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
    return {
      ok: true,
      response: {
        recordList: recordConverter.everyRecord(recordList),
      },
    };
  }

  async findBestSBDRecord(userId: number) {
    const recordList = await this.recordsRepository
      .createQueryBuilder("SBD_record")
      .where("SBD_record.user_id = :userId", { userId })
      .orderBy("SBD_record.SBD_sum", "DESC")
      .getOne();
    let bestRecord = {};
    if (recordList) bestRecord = recordConverter.bestRecord(recordList);
    return {
      ok: true,
      response: {
        bestRecord,
      },
    };
  }

  async getRecentRecordTime(userId: number) {
    const record = await this.recordsRepository
      .createQueryBuilder("record")
      .where("record.user_id = :userId", { userId })
      .select("record.second_stamp")
      .orderBy("record.second_stamp", "DESC")
      .getRawOne();
    let secondStamp = 0;
    if (record) secondStamp = record.second_stamp;
    return {
      ok: true,
      response: {
        secondStamp,
      },
    };
  }
}
