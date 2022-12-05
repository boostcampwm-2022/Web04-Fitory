import { useQuery } from "react-query";
import ExerciseAPI from "@api/ExerciseAPI";
import { QUERY_KEY } from "@constants/enums";
import { ExerciseProfile } from "src/types/exercise";

const useExerciseProfile = () => {
  const { data } = useQuery(QUERY_KEY.EXERCISE_PROFILE, () => ExerciseAPI.getExerciseProfile(), {
    suspense: true,
  });

  return { exerciseProfile: data as ExerciseProfile };
};

export default useExerciseProfile;
