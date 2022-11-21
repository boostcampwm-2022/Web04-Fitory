import { Exercise } from "../entities/exercise.entity";

export class EveryDateDto {
  dateList!: string[];

  constructor(dateObject: Exercise[]) {
    this.dateList = dateObject.map((object) => object.date);
  }
}
