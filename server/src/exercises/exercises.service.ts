import { HistoryOfMonthDto } from "./dto/history-of-month.dto";
import { Exercise } from "./entities/exercise.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { EveryDateDto } from "./dto/every-date.dto";

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
    if (!exerciseRows) console.log(exerciseRows);
    return new EveryDateDto(exerciseRows);
  }

  async findExerciseHistoryOfMonth(month: number, userId: number) {
    const exerciseHistory = await this.exerciseRepository
      .createQueryBuilder("exercise")
      .where("exercise.user_id = :userId", { userId })
      .andWhere("exercise.date like :date", { date: `__${month.toString().padStart(2, "0")}__` })
      .getMany();
    return new HistoryOfMonthDto(exerciseHistory);
  }

  async getTotalVolume(userId: number) {
    const exerciseList = await this.exerciseRepository
      .createQueryBuilder("exercise")
      .select("exercise.exerciseString")
      .where("exercise.user_id = :userId", { userId })
      .getMany();
    let totalVolume: number = 0;
    exerciseList.map((element) => {
      element.exerciseString.split("|").map((item) => {
        const [kg, count, check] = item.split("/");
        totalVolume += Number(check) * Number(kg) * Number(count);
      });
    });
    return totalVolume;
  }

  async getTotalExerciseDate(userId: number) {
    return await this.exerciseRepository
      .createQueryBuilder("exercise")
      .select("exercise.date")
      .where("exercise.user_id = :userId", { userId })
      .getCount();
  }

  async getProfileData(userId: number) {
    const totalVolume = await this.getTotalVolume(userId);
    const totalExerciseDate = await this.getTotalExerciseDate(userId);
    return { totalVolume, totalExerciseDate };
  }
}
