import dayjs from "dayjs";
import "dayjs/locale/ko";
import { Exception } from "@exception/exceptions";
import { HttpResponse } from "@converter/response.converter";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "@user/entities/user.entity";
import { classifyToTier } from "@utils/classify";
import { SBD_statistics } from "@statistics/entities/sbd_statistics.entity";
import { SBD_record } from "./entities/sbd_record.entity";
import { recordConverter } from "./converter/sbd_records.converter";
import { SingleSBDDataDto } from "./dto/single_sbd_data.dto";

@Injectable()
export class SbdRecordsService {
  constructor(
    @InjectRepository(SBD_record)
    private recordsRepository: Repository<SBD_record>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(SBD_statistics)
    private statisticsRepository: Repository<SBD_statistics>,
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
      const { weight, gender } = await this.userRepository
        .createQueryBuilder("user")
        .select(["user.weight AS weight", "user.gender AS gender"])
        .where("user.user_id = :userId", { userId: sbdData.userId })
        .getRawOne();

      const sbdSum = sbdData.squat + sbdData.benchpress + sbdData.deadlift;
      const recordObject = await this.recordsRepository.create(sbdData);
      await this.recordsRepository.save({
        ...recordObject,
        SBD_sum: sbdSum,
        userWeight: weight,
        user: { id: sbdData.userId },
      });

      const tier = classifyToTier(weight, sbdSum);

      await this.userRepository
        .createQueryBuilder("user")
        .update()
        .set({ tier })
        .where("user.user_id = :userId", { userId: sbdData.userId })
        .execute();

      await this.statisticsRepository.save({ gender, weight, SBD_volume: sbdSum });

      return HttpResponse.success({
        message: "Record Submit Success",
        tier,
      });
    } catch (error) {
      throw new Exception().invalidSubmit();
    }
  }
}
