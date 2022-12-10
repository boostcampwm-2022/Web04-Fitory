import { useQueryClient } from "react-query";
import ExerciseAPI from "@api/ExerciseAPI";
import { QueryKey } from "@constants/enums";

const useDeleteRoutine = (routineName: string) => {
  const queryClient = useQueryClient();

  ExerciseAPI.deleteRoutine(routineName).then(() => {
    queryClient.invalidateQueries(QueryKey.ROUTINE_LIST);
  });
};

export default useDeleteRoutine;
