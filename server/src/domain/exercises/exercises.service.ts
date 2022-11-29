import { HttpResponse } from "@converter/response.converter";
import { exerciseConverter } from "./converter/exercise.converter";
import { Exercise } from "./entities/exercise.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Exception } from "src/exception/exceptions";

@Injectable()
export class ExercisesService {
  constructor(
    @InjectRepository(Exercise)
    private exerciseRepository: Repository<Exercise>,
  ) {}

  async findEveryExerciseDate(userId: number) {
    const exerciseRows = await this.exerciseRepository
      .createQueryBuilder("exercise")
      .select("exercise.date")
      .where("exercise.user_id = :userId", { userId })
      .orderBy("CAST (exercise.date AS SIGNED)", "ASC")
      .getMany();
    return HttpResponse.success({
      dateList: exerciseConverter.dateList(exerciseRows),
    });
  }

  async findExerciseHistoryOfMonth(month: number, userId: number) {
    const exerciseHistory = await this.exerciseRepository
      .createQueryBuilder("exercise")
      .where("exercise.user_id = :userId", { userId })
      .andWhere("exercise.date like :date", { date: `__${month.toString().padStart(2, "0")}__` })
      .getMany();
    return HttpResponse.success({
      historyList: exerciseConverter.historyOfMonth(exerciseHistory),
    });
  }

  async getProfileData(userId: number) {
    const totalVolume = await this.getTotalVolume(userId);
    const totalExerciseDate = await this.getTotalExerciseDate(userId);
    return HttpResponse.success({
      totalVolume,
      totalExerciseDate,
    });
  }

  async submitSingleSBDRecord(exerciseData: unknown) {
    return HttpResponse.success({
      exerciseData,
    });
  }

  async getTotalVolume(userId: number) {
    const exerciseList = await this.exerciseRepository
      .createQueryBuilder("exercise")
      .select("exercise.exerciseString")
      .where("exercise.user_id = :userId", { userId })
      .getMany();
    return exerciseConverter.totalVolume(exerciseList);
  }

  async getTotalExerciseDate(userId: number) {
    return await this.exerciseRepository
      .createQueryBuilder("exercise")
      .select("exercise.date")
      .where("exercise.user_id = :userId", { userId })
      .getCount();
  }
}
