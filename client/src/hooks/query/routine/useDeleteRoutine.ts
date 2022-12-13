import { useQueryClient, useMutation } from "react-query";
import ExerciseAPI from "@api/ExerciseAPI";
import { QueryKey } from "@constants/enums";

const useDeleteRoutine = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation((routineName: string) => ExerciseAPI.deleteRoutine(routineName), {
    onSuccess: () => queryClient.invalidateQueries(QueryKey.ROUTINE_LIST),
  });

  return { deleteRoutine: mutate };
};

export default useDeleteRoutine;
