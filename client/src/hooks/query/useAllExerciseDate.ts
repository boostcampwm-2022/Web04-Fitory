import { useQuery } from "react-query";
import ExerciseAPI from "@api/ExerciseAPI";
import { QueryKey } from "@constants/enums";
import { ExerciseDate } from "src/types/exercise";

const useAllExerciseDate = () => {
  const { data } = useQuery(QueryKey.EXERCISE_DATE_LIST, () => ExerciseAPI.getAllExerciseDate());

  return { exerciseDateList: [...(data as ExerciseDate)] };
};

export default useAllExerciseDate;
