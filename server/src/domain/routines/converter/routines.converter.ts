import { routineSet } from "@type/domain";
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

  routineDetailList: (routineList: Routine[]) => {
    const routineDetailObject: {
      [routineName: string]: { [exerciseName: string]: routineSet[] }[];
    } = {};
    routineList.map((routine: Routine) => {
      routineDetailObject[routine.routineName] = [];
      const exerciseList: routineSet[] = [];
      routine.exerciseString.split("|").map((singleExercise, index) => {
        const [kg, count] = singleExercise.split("/").map((item) => Number(item));
        exerciseList.push({ index: index + 1, kg, count });
      });

      routineDetailObject[routine.routineName].push({
        [routine.exerciseName]: exerciseList,
      });
    });
    return routineDetailObject;
  },
};
