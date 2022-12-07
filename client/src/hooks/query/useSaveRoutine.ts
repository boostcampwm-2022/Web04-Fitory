import { useQueryClient, useMutation } from "react-query";
import ExerciseAPI from "@api/ExerciseAPI";
import { QueryKey } from "@constants/enums";
import { Routine } from "src/types/exercise";

const useSaveRoutine = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    ({ routineName, exerciseList }: Routine) => {
      const exerciseListWithoutCheckProp = exerciseList.map(({ exerciseName, setList }) => ({
        exerciseName,
        setList: setList.map(({ kg, count }) => ({ kg, count })),
      }));

      return ExerciseAPI.saveRoutine({
        routineName,
        exerciseList: exerciseListWithoutCheckProp,
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(QueryKey.ROUTINE_LIST);
      },
    },
  );

  return { saveRoutine: mutate };
};

export default useSaveRoutine;
