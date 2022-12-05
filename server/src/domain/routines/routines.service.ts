import { HttpResponse } from "@converter/response.converter";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Exception } from "@exception/exceptions";
import { exerciseConverter } from "@exercise/converter/exercise.converter";
import { Routine } from "./entities/routine.entity";
import { routineConverter } from "./converter/routines.converter";
import { RoutineDto } from "./dto/single-routine.dto";

@Injectable()
export class RoutinesService {
  constructor(
    @InjectRepository(Routine)
    private routinesRepository: Repository<Routine>,
  ) {}

  async findEveryRoutine(userId: number) {
    const routineList = await this.routinesRepository
      .createQueryBuilder("routine")
      .where("routine.user_id = :userId", { userId })
      .andWhere("routine.deleted = false")
      .getMany();
    return HttpResponse.success({
      routineList: routineConverter.routineNameList(routineList),
    });
  }

  async getSingleRoutineDetail(userId: number, routineName: string) {
    const routine = await this.routinesRepository
      .createQueryBuilder("routine")
      .innerJoin("routine.user", "user", "user.user_id = :userId", { userId })
      .where("routine.routine_name = :routineName", { routineName })
      .andWhere("routine.deleted = false")
      .getMany();

    if (routine.length) {
      return HttpResponse.success({
        routine: routineConverter.routineDetailList(routine),
      });
    }
    throw new Exception().routineNotFound();
  }

  async saveRoutine(routineData: RoutineDto) {
    const routine = await this.routinesRepository
      .createQueryBuilder("routine")
      .innerJoin("routine.user", "user", "user.user_id = :userId", { userId: routineData.userId })
      .where("routine.routine_name = :routineName", { routineName: routineData.routineName })
      .andWhere("routine.deleted = false")
      .getMany();

    if (routine.length) {
      throw new Exception().routineNameDuplicate();
    }

    await this.registerRoutine(routineData);
  }

  async registerRoutine(routineData: RoutineDto) {
    try {
      await Promise.all(
        routineData.exerciseList.map(async (exercise) => {
          const routineString = routineConverter.routineObjectToString(exercise);

          await this.routinesRepository.save({
            routineName: routineData.routineName,
            exerciseName: exercise.exerciseName,
            exerciseString: routineString.slice(1),
            user: { id: routineData.userId },
          });

          return HttpResponse.success("Routine Save Success");
        }),
      );
    } catch (error) {
      throw new Exception().invalidSubmit();
    }
  }
}
