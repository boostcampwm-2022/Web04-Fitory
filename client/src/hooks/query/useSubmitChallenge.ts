import { QueryClient, useMutation } from "react-query";
import ChallengeAPI from "@api/ChallengeAPI";
import { QUERY_KEY } from "@constants/enums";
import { Challenge } from "src/types/challenge";

const useSubmitChallenge = () => {
  const queryClient = new QueryClient();

  const { mutate } = useMutation(
    (SBDWeight: Challenge) => ChallengeAPI.submitChallengeScore(SBDWeight),
    {
      onSuccess: () => queryClient.invalidateQueries(QUERY_KEY.BEST_CHALLENGE_SCORE),
    },
  );

  return { submitChallenge: mutate };
};

export default useSubmitChallenge;
