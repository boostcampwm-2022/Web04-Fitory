import { useQuery } from "react-query";
import ExerciseAPI from "@api/ExerciseAPI";
import { QueryKey } from "@constants/enums";
import { DEFAULT_STALE_TIME, NO_STALE_TIME } from "@constants/consts";
import { ExerciseDate } from "src/types/exercise";
import { UserId } from "src/types/user";
import { authStorage } from "src/services/ClientStorage";

const useAllExerciseDate = (userId: UserId) => {
  const { data } = useQuery(
    [QueryKey.EXERCISE_DATE_LIST, userId],
    () => ExerciseAPI.getAllExerciseDate(userId),
    { staleTime: userId === authStorage.get() ? DEFAULT_STALE_TIME : NO_STALE_TIME },
  );

  return { exerciseDateList: [...(data as ExerciseDate)] };
};

export default useAllExerciseDate;
