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
      .getMany();
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
}
