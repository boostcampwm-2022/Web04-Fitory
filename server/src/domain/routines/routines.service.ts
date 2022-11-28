import { HttpResponse } from "@converter/response.converter";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "@user/entities/user.entity";
import { Exception } from "@exception/exceptions";
import { Routine } from "./entities/routine.entity";
import { routineConverter } from "./converter/routines.converter";
import { SingleRoutineoDto } from "./dto/single-routine.dto";

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
      .getMany();

    if (routine) {
      return HttpResponse.success({ routine });
    }
    throw new Exception().routineNotFound();
  }

  async saveSingleRoutine(singleRoutine: SingleRoutineoDto) {
    try {
    } catch (error) {}
  }
}
