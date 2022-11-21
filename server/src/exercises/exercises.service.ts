import { HistoryOfMonthDto } from "./dto/history-of-month.dto";
import { Exercise } from "./entities/exercise.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Equal, Like, Repository } from "typeorm";
import { EveryDateDto } from "./dto/every-date.dto";

@Injectable()
export class ExercisesService {
  constructor(
    @InjectRepository(Exercise)
    private exerciseRepository: Repository<Exercise>,
  ) {}

  async findEveryExerciseDate(userId: number) {
    const exerciseRows = await this.exerciseRepository.findBy({
      user: { id: Equal(userId) },
    });
    return new EveryDateDto(exerciseRows);
  }

  async findExerciseHistoryOfMonth(month: number, userId: number) {
    const exerciseHistory = await this.exerciseRepository.findBy({
      user: { id: Equal(userId) },
      date: Like(`__${month.toString().padStart(2, "0")}__`),
    });
    return new HistoryOfMonthDto(exerciseHistory);
  }
}
