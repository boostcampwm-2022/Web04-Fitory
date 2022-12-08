import { useQuery } from "react-query";
import ChallengeAPI from "@api/ChallengeAPI";
import { QueryKey } from "@constants/enums";
import { ChallengeDetail } from "src/types/challenge";

const useBestChallengeScore = () => {
  const { data } = useQuery(
    QueryKey.BEST_CHALLENGE_SCORE,
    () => ChallengeAPI.getBestChallengeScore(),
    {
      suspense: true,
    },
  );
  const isEmpty = !Object.keys(data as ChallengeDetail).length;

  return { bestChallengeScore: isEmpty ? null : data } as const;
};

export default useBestChallengeScore;
