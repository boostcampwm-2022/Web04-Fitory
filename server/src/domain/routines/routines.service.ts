import { HttpResponse } from "@converter/response.converter";
import { routineConverter } from "./converter/routines.converter";
import { Routine } from "./entities/routine.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
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

  async getSingleRoutine(userId: number, routineName: string) {
    return HttpResponse.success({});
  }

  async saveSingleRoutine(singleRoutine: SingleRoutineoDto) {
    try {
    } catch (error) {}
  }
}
