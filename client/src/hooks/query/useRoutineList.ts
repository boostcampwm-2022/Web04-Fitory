import { useQuery } from "react-query";
import { QueryKey } from "@constants/enums";
import ExerciseAPI from "@api/ExerciseAPI";
import { UserId } from "src/types/user";

const useRoutineList = (userId: UserId) => {
  const { data } = useQuery(
    [QueryKey.ROUTINE_LIST, userId],
    () => ExerciseAPI.getRoutineList(userId),
    {
      suspense: true,
    },
  );

  return { routineList: data } as const;
};

export default useRoutineList;
