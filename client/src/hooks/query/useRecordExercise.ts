import { useQueryClient, useMutation } from "react-query";
import ExerciseAPI from "@api/ExerciseAPI";
import { QUERY_KEY } from "@constants/enums";
import { Exercise } from "src/types/exercise";

const useRecordExercise = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    (exerciseList: Exercise[]) => ExerciseAPI.recordExercise(exerciseList),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(QUERY_KEY.EXERCISE_DATE_LIST);
        queryClient.invalidateQueries(QUERY_KEY.EXERCISE_PROFILE);
      },
    },
  );

  return { recordExercise: mutate };
};

export default useRecordExercise;
