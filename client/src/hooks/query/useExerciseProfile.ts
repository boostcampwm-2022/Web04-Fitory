import { useQuery } from "react-query";
import ExerciseAPI from "@api/ExerciseAPI";
import { QueryKey } from "@constants/enums";
import { ExerciseProfile } from "src/types/exercise";

const useExerciseProfile = () => {
  const { data } = useQuery(QueryKey.EXERCISE_PROFILE, () => ExerciseAPI.getExerciseProfile(), {
    suspense: true,
  });

  return { exerciseProfile: data as ExerciseProfile };
};

export default useExerciseProfile;
