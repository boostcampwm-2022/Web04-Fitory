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
    let recordList = await this.recordsRepository.findBy({
      user: { id: Equal(userId) },
    });
    recordList = recordList.sort((a, b) => {
      return Number(a.date) - Number(b.date);
    });
    return new EveryRecordDto(recordList);
  }
}
