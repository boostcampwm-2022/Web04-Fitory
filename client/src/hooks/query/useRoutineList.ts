import { useQuery } from "react-query";
import { QueryKey } from "@constants/enums";
import ExerciseAPI from "@api/ExerciseAPI";
import { UserId } from "src/types/user";
import { RoutineList } from "src/types/exercise";

const useRoutineList = (userId: UserId) => {
  const { data } = useQuery([QueryKey.ROUTINE_LIST, userId], () =>
    ExerciseAPI.getRoutineList(userId),
  );

  return { routineList: data as RoutineList } as const;
};

export default useRoutineList;
