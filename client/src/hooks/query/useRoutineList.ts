import { useQuery } from "react-query";
import { QUERY_KEY } from "@constants/enums";
import ExerciseAPI from "@api/ExerciseAPI";
import { UserId } from "src/types/user";

const useRoutineList = (userId: UserId) => {
  const { data } = useQuery(
    [QUERY_KEY.ROUTINE_LIST, userId],
    () => ExerciseAPI.getRoutineList(userId),
    {
      suspense: true,
    },
  );

  return { routineList: data };
};

export default useRoutineList;
