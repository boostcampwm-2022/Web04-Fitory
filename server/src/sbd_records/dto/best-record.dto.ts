import { SBD_record } from "../entities/sbd_record.entity";

export class BestRecordDto {
  bestRecord!: { squat: number; deadlift: number; benchpress: number; SBD_sum: number };

  constructor(record: SBD_record) {
    this.bestRecord = {
      squat: record.squat,
      deadlift: record.deadlift,
      benchpress: record.benchpress,
      SBD_sum: record.SBD_sum,
    };
  }
}
