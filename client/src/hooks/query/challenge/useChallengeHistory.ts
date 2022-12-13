import { useQuery } from "react-query";
import { QueryKey } from "@constants/enums";
import ChallengeAPI from "@api/ChallengeAPI";
import { ChallengeHistoryList } from "src/types/challenge";

const useChallengeHistory = () => {
  const { data } = useQuery(QueryKey.CHALLENGE_HISTORY, () => ChallengeAPI.getEveryDayHistory());
  return { challengeHistory: data as ChallengeHistoryList[] };
};

export default useChallengeHistory;
