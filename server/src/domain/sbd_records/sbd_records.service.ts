import dayjs from "dayjs";
import "dayjs/locale/ko";
import { Exception } from "@exception/exceptions";
import { SingleSBDDataDto } from "./dto/single_sbd_data.dto";
import { HttpResponse } from "@converter/response.converter";
import { recordConverter } from "./converter/sbd_records.converter";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { SBD_record } from "./entities/sbd_record.entity";
import { User } from "@user/entities/user.entity";
import { classifyToTier } from "src/utils/classify";

@Injectable()
export class SbdRecordsService {
  constructor(
    @InjectRepository(SBD_record)
    private recordsRepository: Repository<SBD_record>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findEverySBDRecord(userId: number) {
    const recordList = await this.recordsRepository
      .createQueryBuilder("SBD_record")
      .where("SBD_record.user_id = :userId", { userId })
      .orderBy("SBD_record.time_stamp", "ASC")
      .getMany();
    return HttpResponse.success({
      recordList: recordConverter.everyRecord(recordList),
    });
  }

  async findBestSBDRecord(userId: number) {
    const recordList = await this.recordsRepository
      .createQueryBuilder("SBD_record")
      .where("SBD_record.user_id = :userId", { userId })
      .orderBy("SBD_record.SBD_sum", "DESC")
      .getOne();
    let bestRecord = {};
    if (recordList) bestRecord = recordConverter.bestRecord(recordList);
    return HttpResponse.success({
      bestRecord,
    });
  }

  async getRecentRecordTime(userId: number) {
    const record = await this.recordsRepository
      .createQueryBuilder("record")
      .where("record.user_id = :userId", { userId })
      .select("record.time_stamp")
      .orderBy("record.time_stamp", "DESC")
      .getRawOne();
    dayjs.locale("ko");
    let timeStamp = 0;
    if (record) timeStamp = record.time_stamp;
    return HttpResponse.success({
      recentTimeStamp: timeStamp,
      nowTimeStamp: dayjs().format("YYYY-MM-DDTHH:mm:ss"),
    });
  }

  async submitSingleSBDRecord(sbdData: SingleSBDDataDto) {
    try {
      const userObject = await this.userRepository
        .createQueryBuilder("user")
        .where("user.user_id = :userId", { userId: sbdData.userId })
        .getOne();
      const recordObject = this.recordsRepository.create(sbdData);
      const { weight } = userObject;
      const SBD_sum = sbdData.squat + sbdData.benchpress + sbdData.deadlift;
      await this.recordsRepository.save({
        ...recordObject,
        SBD_sum,
        userWeight: userObject.weight,
        user: { id: sbdData.userId },
      });
      userObject.tier = classifyToTier(weight, SBD_sum);
      await this.userRepository.save(userObject);
      return HttpResponse.success({
        message: "Record Submit Success",
      });
    } catch (error) {
      throw new Exception().invalidSubmit();
    }
  }
}
