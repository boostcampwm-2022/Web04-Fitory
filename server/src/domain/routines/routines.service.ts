import { routineConverter } from "./converter/routines.converter";
import { Routine } from "./entities/routine.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

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
    return {
      ok: true,
      response: {
        routineList: routineConverter.routineNameList(routineList),
      },
    };
  }
}
