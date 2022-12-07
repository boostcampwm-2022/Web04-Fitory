import { useQueryClient } from "react-query";
import ExerciseAPI from "@api/ExerciseAPI";
import { QUERY_KEY } from "@constants/enums";

const useDeleteRoutine = (routineName: string) => {
  const queryClient = useQueryClient();

  ExerciseAPI.deleteRoutine(routineName).then(() => {
    queryClient.invalidateQueries(QUERY_KEY.ROUTINE_LIST);
  });
};

export default useDeleteRoutine;
