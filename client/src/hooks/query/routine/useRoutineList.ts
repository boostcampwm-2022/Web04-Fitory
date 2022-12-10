import { useQuery } from "react-query";
import { QueryKey } from "@constants/enums";
import { DEFAULT_STALE_TIME, NO_STALE_TIME } from "@constants/consts";
import ExerciseAPI from "@api/ExerciseAPI";
import { UserId } from "src/types/user";
import { authStorage } from "src/services/ClientStorage";

const useRoutineList = (userId: UserId) => {
  const { data } = useQuery(
    [QueryKey.ROUTINE_LIST, userId],
    () => ExerciseAPI.getRoutineList(userId),
    { staleTime: userId === authStorage.get() ? DEFAULT_STALE_TIME : NO_STALE_TIME },
  );

  return { routineList: data } as const;
};

export default useRoutineList;
