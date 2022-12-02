import { useQuery } from "react-query";
import ExerciseAPI from "@api/ExerciseAPI";
import { ExerciseDate } from "src/types/exercise";

const useAllExerciseDate = () => {
  const { data } = useQuery("exerciseDateList", () => ExerciseAPI.getAllExerciseDate(), {
    suspense: true,
  });

  return { exerciseDateList: data as ExerciseDate };
};

export default useAllExerciseDate;
