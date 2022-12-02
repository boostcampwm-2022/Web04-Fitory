import { useQuery } from "react-query";
import ChallengeAPI from "@api/ChallengeAPI";
import { QUERY_KEY } from "@constants/enums";
import { ChallengeDetail } from "src/types/challenge";

const useBestChallengeScore = () => {
  const { data } = useQuery(
    QUERY_KEY.BEST_CHALLENGE_SCORE,
    () => ChallengeAPI.getBestChallengeScore(),
    {
      suspense: true,
    },
  );
  const isEmpty = !Object.keys(data as ChallengeDetail).length;

  return { bestChallengeScore: isEmpty ? null : data };
};

export default useBestChallengeScore;
