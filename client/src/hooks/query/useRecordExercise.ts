import { useQueryClient, useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import ExerciseAPI from "@api/ExerciseAPI";
import { QueryKey, RoutePath } from "@constants/enums";
import { Exercise } from "src/types/exercise";

const useRecordExercise = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate } = useMutation(
    (exerciseList: Exercise[]) => ExerciseAPI.recordExercise(exerciseList),
    {
      onSuccess: (isSuccess) => {
        if (!isSuccess) {
          return;
        }
        queryClient.invalidateQueries(QueryKey.EXERCISE_DATE_LIST);
        queryClient.invalidateQueries(QueryKey.EXERCISE_PROFILE);
        queryClient.invalidateQueries(QueryKey.SINGLE_MONTH_EXERCISE_HISTORY);
        navigate(RoutePath.HOME, { replace: true });
      },
    },
  );

  return { recordExercise: mutate };
};

export default useRecordExercise;
