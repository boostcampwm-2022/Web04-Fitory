import { useQueryClient, useMutation } from "react-query";
import ChallengeAPI from "@api/ChallengeAPI";
import { QueryKey } from "@constants/enums";
import { Challenge } from "src/types/challenge";

const useSubmitChallenge = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    (SBDWeight: Challenge) => ChallengeAPI.submitChallengeScore(SBDWeight),
    {
      onSuccess: () => queryClient.invalidateQueries(QueryKey.BEST_CHALLENGE_SCORE),
    },
  );

  return { submitChallenge: mutate };
};

export default useSubmitChallenge;
