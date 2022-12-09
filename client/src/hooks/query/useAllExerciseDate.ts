import { useQuery } from "react-query";
import ExerciseAPI from "@api/ExerciseAPI";
import { QueryKey } from "@constants/enums";
import { ExerciseDate } from "src/types/exercise";
import { UserId } from "src/types/user";

const useAllExerciseDate = (userId: UserId) => {
  const { data } = useQuery([QueryKey.EXERCISE_DATE_LIST, userId], () =>
    ExerciseAPI.getAllExerciseDate(),
  );

  return { exerciseDateList: [...(data as ExerciseDate)] };
};

export default useAllExerciseDate;
