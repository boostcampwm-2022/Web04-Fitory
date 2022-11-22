import { BestRecordDto } from "./dto/best-record.dto";
import { EveryRecordDto } from "./dto/every-record.dto";
import { Equal, Repository } from "typeorm";
import { SBD_record } from "./entities/sbd_record.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

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
    let recordList = await this.recordsRepository.findBy({
      user: { id: Equal(userId) },
    });
    if (recordList.length === 0) {
      return { response: "User Not Exist" };
    }
    recordList = recordList.sort((a, b) => {
      return Number(b.SBD_sum) - Number(a.SBD_sum);
    });
    return new BestRecordDto(recordList[0]);
  }
}
