import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { SBD_statistics } from "./entities/sbd_statistics.entity";

@Injectable()
export class SbdStatisticsService {
  constructor(
    @InjectRepository(SBD_statistics)
    private exerciseRepository: Repository<SBD_statistics>,
  ) {}

  getEverySBDData() {
    return {
      ok: true,
      response: {},
    };
  }
}
