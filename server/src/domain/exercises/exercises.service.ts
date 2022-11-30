import { User } from "./../users/entities/user.entity";
import { HttpResponse } from "@converter/response.converter";
import { exerciseConverter } from "./converter/exercise.converter";
import { Exercise } from "./entities/exercise.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Exception } from "src/exception/exceptions";
import { ExerciseDataDto } from "./dto/exercise.dto";

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
      const userObject = await this.userRepository
        .createQueryBuilder("user")
        .where("user.user_id = :userId", { userId: exerciseData.userId })
        .getOne();
      await Promise.all(
        exerciseData.exerciseList.map(async (exercise) => {
          const setString = exercise.setList.reduce((acc, cur) => {
            return acc + "|" + cur.kg + "/" + cur.count + "/" + cur.check;
          }, "");
          console.log(exerciseData.userId);
          await this.exerciseRepository.save({
            exerciseName: exercise.exerciseName,
            exerciseString: setString.substring(1),
            date: exerciseData.date,
            user: userObject,
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
    return await this.exerciseRepository
      .createQueryBuilder("exercise")
      .select("exercise.date")
      .where("exercise.user_id = :userId", { userId })
      .getCount();
  }
}
