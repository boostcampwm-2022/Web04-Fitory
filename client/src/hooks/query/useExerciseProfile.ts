import { useQuery } from "react-query";
import ExerciseAPI from "@api/ExerciseAPI";
import { ExerciseProfile } from "src/types/exercise";

const useExerciseProfile = () => {
  const { data } = useQuery("exerciseProfile", () => ExerciseAPI.getExerciseProfile(), {
    suspense: true,
  });

  return { exerciseProfile: data as ExerciseProfile };
};

export default useExerciseProfile;
