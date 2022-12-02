import { HttpResponse } from "@converter/response.converter";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Exception } from "src/exception/exceptions";
import { Exercise } from "./entities/exercise.entity";
import { exerciseConverter } from "./converter/exercise.converter";
import { User } from "../users/entities/user.entity";
import { ExerciseDataDto } from "./dto/exercise.dto";
import dayjs from "dayjs";

@Injectable()
export class ExercisesService {
  constructor(
    @InjectRepository(Exercise)
    private exerciseRepository: Repository<Exercise>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
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

  async submitSingleSBDRecord(exerciseData: ExerciseDataDto) {
    try {
      await Promise.all(
        exerciseData.exerciseList.map(async (exercise) => {
          const setString = exercise.setList.reduce((acc, cur) => {
            return `${acc}|${cur.kg}/${cur.count}/${cur.check}`;
          }, "");

          await this.exerciseRepository.save({
            exerciseName: exercise.exerciseName,
            exerciseString: setString.slice(1),
            date: dayjs().format("YYMMDD"),
            user: { id: exerciseData.userId },
          });
        }),
      );
      return HttpResponse.success({
        message: "Exercise Submit Success",
      });
    } catch (error) {
      throw new Exception().invalidSubmit();
    }
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
    return this.exerciseRepository
      .createQueryBuilder("exercise")
      .select("exercise.date")
      .where("exercise.user_id = :userId", { userId })
      .getCount();
  }
}
