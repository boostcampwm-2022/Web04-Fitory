import { useQuery } from "react-query";
import ChallengeAPI from "@api/ChallengeAPI";
import { Challenge } from "src/types/challenge";

const useBestChallengeScore = () => {
  const { data } = useQuery("bestChallengeScore", () => ChallengeAPI.getBestChallengeScore(), {
    suspense: true,
  });
  const isEmpty = !Object.keys(data as Challenge).length;

  return { bestChallengeScore: isEmpty ? null : data };
};

export default useBestChallengeScore;
