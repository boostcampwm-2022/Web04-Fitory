import { useState } from "react";
import { useQueryClient, useMutation } from "react-query";
import ChallengeAPI from "@api/ChallengeAPI";
import { QueryKey } from "@constants/enums";
import { UserTier } from "src/types/user";
import { Challenge } from "src/types/challenge";

const useSubmitChallenge = () => {
  const [challengeResult, setChallengeResult] = useState<UserTier>(0);
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    (SBDWeight: Challenge) => ChallengeAPI.submitChallengeScore(SBDWeight),
    {
      onSuccess: (result) => {
        setChallengeResult(result as UserTier);
        queryClient.invalidateQueries(QueryKey.BEST_CHALLENGE_SCORE);
        queryClient.invalidateQueries(QueryKey.CHALLENGE_HISTORY);
        queryClient.invalidateQueries(QueryKey.USER_INFO);
      },
    },
  );

  return { submitChallenge: mutate, challengeResult };
};

export default useSubmitChallenge;
