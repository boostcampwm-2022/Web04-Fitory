import { useState } from "react";
import { useQueryClient, useMutation } from "react-query";
import ExerciseAPI from "@api/ExerciseAPI";
import { QueryKey } from "@constants/enums";
import { Routine } from "src/types/exercise";
import { authStorage } from "src/services/ClientStorage";

const useSaveRoutine = () => {
  const [isSussess, setIsSussess] = useState(false);
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
      onSuccess: (result) => {
        setIsSussess(result);
        queryClient.invalidateQueries([QueryKey.ROUTINE_LIST, authStorage.get()]);
      },
    },
  );

  return { saveRoutine: mutate, isSussess };
};

export default useSaveRoutine;
