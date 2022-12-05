import { RoutineSet, RoutineType } from "@type/domain";
import { SingleExercise } from "@routine/dto/single-routine.dto";
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
    const routineDetail: RoutineType[] = [];
    routineList.map((routine: Routine) => {
      const exerciseList: RoutineSet[] = [];
      routine.exerciseString.split("|").map((singleExercise, index) => {
        const [kg, count] = singleExercise.split("/").map((item) => Number(item));
        exerciseList.push({ index: index + 1, kg, count });
      });

      routineDetail.push({
        routineId: routine.id,
        exerciseName: routine.exerciseName,
        set: exerciseList,
      });
    });
    return routineDetail;
  },

  routineObjectToString: (exerciseList: SingleExercise) => {
    return exerciseList.setList.reduce((acc, cur) => {
      return `${acc}|${cur.kg}/${cur.count}`;
    }, "");
  },
};
