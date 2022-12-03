import { useQuery } from "react-query";
import { QUERY_KEY } from "@constants/enums";
import ChallengeAPI from "@api/ChallengeAPI";
import { ChallengeTimestamp } from "src/types/challenge";

const useRecentChallengeTime = () => {
  const { data } = useQuery(
    QUERY_KEY.RECENT_CHALLENGE_TIME,
    () => ChallengeAPI.getRecentChallengeTime(),
    { suspense: true },
  );

  const { recentTimeStamp, nowTimeStamp } = data as ChallengeTimestamp;
  const targetTimeStamp = new Date(recentTimeStamp);

  targetTimeStamp.setHours(targetTimeStamp.getHours() + 24);

  return {
    recentTimeStamp: new Date(recentTimeStamp),
    nowTimeStamp: new Date(nowTimeStamp),
    targetTimeStamp,
  };
};

export default useRecentChallengeTime;
