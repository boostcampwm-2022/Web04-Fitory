import { useMutation } from "react-query";
import ExerciseAPI from "@api/ExerciseAPI";
import { Routine } from "src/types/exercise";

const useSaveRoutine = () => {
  const { mutate } = useMutation(({ routineName, exerciseList }: Routine) => {
    const exerciseListWithoutCheckProp = exerciseList.map(({ exerciseName, setList }) => ({
      exerciseName,
      setList: setList.map(({ kg, count }) => ({ kg, count })),
    }));

    return ExerciseAPI.saveRoutine({
      routineName,
      exerciseList: exerciseListWithoutCheckProp,
    });
  });

  return { saveRoutine: mutate };
};

export default useSaveRoutine;
