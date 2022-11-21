import { Routine } from "./../entities/routine.entity";

export class RoutineList {
  routineList: any = [];

  constructor(routineObject: Routine[]) {
    this.routineList = routineObject
      .reduce((acc, cur) => {
        return acc.find((item) => item.uuid === cur.uuid) ? acc : [...acc, cur];
      }, [])
      .map((routine) => {
        return {
          uuid: routine.uuid,
          routineName: routine.routineName,
        };
      });
  }
}
