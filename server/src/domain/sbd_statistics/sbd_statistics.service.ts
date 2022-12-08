import { HttpResponse } from "@converter/response.converter";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Between, FindOperator, Repository } from "typeorm";
import { Exception } from "@exception/exceptions";
import { SBD_statistics } from "./entities/sbd_statistics.entity";

@Injectable()
export class SbdStatisticsService {
  constructor(
    @InjectRepository(SBD_statistics)
    private exerciseRepository: Repository<SBD_statistics>,
  ) {}

  async getSBDStatisticsData(gender: number, weight: number, range: number) {
    const betweenWeight = await this.getBetweenWeight(gender, weight);

    const statistics = await this.exerciseRepository.findAndCount({
      where: { gender, weight: betweenWeight },
      order: { SBD_volume: "ASC" },
    });

    const min = statistics[0][0].SBD_volume;
    const max = statistics[0][statistics[1] - 1].SBD_volume;
    const len = Math.ceil((max - min) / range);

    const loopNum = Array(len)
      .fill(min)
      .map((x, y) => x + y * range);

    const responseData = await this.loopStatisticsDataByRange(
      loopNum,
      range,
      max,
      gender,
      betweenWeight,
    );

    return HttpResponse.success({ min, max, responseData });
  }

  async loopStatisticsDataByRange(
    loopNum: number[],
    range: number,
    max: number,
    gender: number,
    betweenWeight: FindOperator<number>,
  ) {
    const responseData: { x_start: number; x_end: number; y: number }[] = [];

    await Promise.all(
      loopNum.map(async (n) => {
        const start = n;
        const end = n + range;
        if (end > max) {
          const count = await this.exerciseRepository.count({
            where: { gender, weight: betweenWeight, SBD_volume: Between(end - range, max) },
            order: { SBD_volume: "ASC" },
          });
          return responseData.push({ x_start: start, x_end: max, y: count });
        }
        const count = await this.exerciseRepository.count({
          where: { gender, weight: betweenWeight, SBD_volume: Between(start, end) },
          order: { SBD_volume: "ASC" },
        });
        return responseData.push({ x_start: start, x_end: end, y: count });
      }),
    );

    return responseData;
  }

  getBetweenWeight(gender: number, weight: number) {
    const manClass59kg = weight <= 59;
    const manClass66kg = weight >= 59.01 && weight <= 66.0;
    const manClass74kg = weight >= 66.01 && weight <= 74.0;
    const manClass83kg = weight >= 74.01 && weight <= 83.0;
    const manClass93kg = weight >= 83.01 && weight <= 93.0;
    const manClass105kg = weight >= 93.01 && weight <= 105.0;
    const manClass120kg = weight >= 105.01 && weight <= 120.0;
    const manClass120Pkg = weight >= 120.01;

    const womanClass47kg = weight <= 47;
    const womanClass52kg = weight >= 47.01 && weight <= 52.0;
    const womanClass57kg = weight >= 52.01 && weight <= 57.0;
    const womanClass63kg = weight >= 74.01 && weight <= 63.0;
    const womanClass72kg = weight >= 83.01 && weight <= 72.0;
    const womanClass84kg = weight >= 93.01 && weight <= 84.0;
    const womanClass84Pkg = weight >= 84.01;

    if (gender === 0) {
      if (manClass59kg) return Between(0, 59.0);
      if (manClass66kg) return Between(59.01, 66.0);
      if (manClass74kg) return Between(66.01, 74.0);
      if (manClass83kg) return Between(74.01, 83.0);
      if (manClass93kg) return Between(83.01, 93.0);
      if (manClass105kg) return Between(93.01, 105.0);
      if (manClass120kg) return Between(105.01, 120.0);
      if (manClass120Pkg) return Between(120.01, 300.0);
    } else if (gender === 1) {
      if (womanClass47kg) return Between(0, 47.0);
      if (womanClass52kg) return Between(47.01, 52.0);
      if (womanClass57kg) return Between(52.01, 57.0);
      if (womanClass63kg) return Between(57.01, 63.0);
      if (womanClass72kg) return Between(63.01, 72.0);
      if (womanClass84kg) return Between(72.01, 84.0);
      if (womanClass84Pkg) return Between(84.01, 300.0);
    }
    throw new Exception().invalidStatistics();
  }
}
