import { Routine } from "../entities/routine.entity";

export const routineConverter = {
  routineNameList: (routineObject: Routine[]) => {
    const result: string[] = [];
    routineObject
      .reduce((acc, cur) => {
        return acc.find((item) => item.routineName === cur.routineName) ? acc : [...acc, cur];
      }, [])
      .map((routine) => {
        result.push(routine.routineName);
      });
    return result;
  },
};
