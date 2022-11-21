import { RoutineList } from "./dto/routine-list.dto";
import { Routine } from "./entities/routine.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Equal, Repository } from "typeorm";

@Injectable()
export class RoutinesService {
  constructor(
    @InjectRepository(Routine)
    private routinesRepository: Repository<Routine>,
  ) {}

  async findEveryRoutine(userId: number) {
    const routineList = await this.routinesRepository.findBy({
      user: { id: Equal(userId) },
    });
    return new RoutineList(routineList);
    // return routineList;
  }
}
