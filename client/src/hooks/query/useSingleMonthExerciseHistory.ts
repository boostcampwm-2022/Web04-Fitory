import { useQuery } from "react-query";
import { QueryKey } from "@constants/enums";
import ExerciseAPI from "@api/ExerciseAPI";
import { ExerciseHistoryList } from "src/types/exercise";

const useSingleMonthExerciseHistory = (month: number) => {
  const { data } = useQuery([QueryKey.SINGLE_MONTH_EXERCISE_HISTORY, month], () =>
    ExerciseAPI.getSingleMonthHistory(month),
  );

  return { exerciseHistoryList: data as ExerciseHistoryList };
};

export default useSingleMonthExerciseHistory;
