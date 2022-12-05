import { useQuery } from "react-query";
import ExerciseAPI from "@api/ExerciseAPI";
import { QUERY_KEY } from "@constants/enums";
import { ExerciseDate } from "src/types/exercise";

const useAllExerciseDate = () => {
  const { data } = useQuery(QUERY_KEY.EXERCISE_DATE_LIST, () => ExerciseAPI.getAllExerciseDate(), {
    suspense: true,
  });

  return { exerciseDateList: data as ExerciseDate };
};

export default useAllExerciseDate;
