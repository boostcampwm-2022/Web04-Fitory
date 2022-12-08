import { useQuery } from "react-query";
import { QueryKey } from "@constants/enums";
import ChallengeAPI from "@api/ChallengeAPI";
import { ChallengeTimestamp } from "src/types/challenge";

const useRecentChallengeTime = () => {
  const { data } = useQuery(
    QueryKey.RECENT_CHALLENGE_TIME,
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
  } as const;
};

export default useRecentChallengeTime;
