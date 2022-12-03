import { useQueryClient, useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import ExerciseAPI from "@api/ExerciseAPI";
import { QUERY_KEY, RoutePath } from "@constants/enums";
import { Exercise } from "src/types/exercise";

const useRecordExercise = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate } = useMutation(
    (exerciseList: Exercise[]) => ExerciseAPI.recordExercise(exerciseList),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(QUERY_KEY.EXERCISE_DATE_LIST);
        queryClient.invalidateQueries(QUERY_KEY.EXERCISE_PROFILE);
        navigate(RoutePath.HOME, { replace: true });
      },
    },
  );

  return { recordExercise: mutate };
};

export default useRecordExercise;
