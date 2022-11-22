import { Routine } from "./../entities/routine.entity";

export class RoutineList {
  routineNameList: any = [];

  constructor(routineObject: Routine[]) {
    routineObject
      .reduce((acc, cur) => {
        return acc.find((item) => item.routineName === cur.routineName) ? acc : [...acc, cur];
      }, [])
      .map((routine) => {
        this.routineNameList.push(routine.routineName);
      });
  }
}
