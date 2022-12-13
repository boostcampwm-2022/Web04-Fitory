import React from "react";
import Paper from "@components/design/Paper";
import { TierName } from "@constants/enums";
import useUserInfo from "@hooks/query/user/useUserInfo";
import useExerciseProfile from "@hooks/query/exercise/useExerciseProfile";
import useBestChallengeScore from "@hooks/query/challenge/useBestChallengeScore";
import convertWeightUnits from "@utils/convertWeightUnits";
import { authStorage } from "src/services/ClientStorage";
import * as s from "./style";

const UserName = () => {
  const { userInfo } = useUserInfo(authStorage.get());
  return <s.UserName>{userInfo.name}</s.UserName>;
};

const UserTier = () => {
  const { userInfo } = useUserInfo(authStorage.get());
  return (
    <s.RecordInfo>
      <p>티어</p>
      <s.Tier tier={userInfo.tier ? TierName[userInfo.tier] : null}>
        {userInfo.tier ? TierName[userInfo.tier] : "-"}
      </s.Tier>
    </s.RecordInfo>
  );
};

const UserChallengeInfo = () => {
  const { bestChallengeScore } = useBestChallengeScore();
  return (
    <s.RecordInfo>
      <p>3대 챌린지</p>
      <s.RecordResult>
        {bestChallengeScore ? convertWeightUnits(bestChallengeScore.SBD_sum) : "-"}
      </s.RecordResult>
    </s.RecordInfo>
  );
};

const UserExerciseInfo = () => {
  const { exerciseProfile } = useExerciseProfile();
  return (
    <>
      <s.RecordInfo>
        <p>누적 중량</p>
        <s.RecordResult>{convertWeightUnits(exerciseProfile.totalVolume)}</s.RecordResult>
      </s.RecordInfo>
      <s.RecordInfo>
        <p>운동 횟수</p>
        <s.RecordResult>{exerciseProfile.totalExerciseDate}</s.RecordResult>
      </s.RecordInfo>
    </>
  );
};

const AuxiliaryExplanation = () => {
  const { bestChallengeScore } = useBestChallengeScore();
  return (
    <div>
      {!bestChallengeScore && (
        <s.ChallengeRequestText>* 3대 챌린지 완료 시 티어가 부여됩니다.</s.ChallengeRequestText>
      )}
    </div>
  );
};

const UserInfoSummary = () => {
  return (
    <Paper style={{ width: "100%" }}>
      <s.Wrapper>
        <s.TextInfoWrapper>
          <UserName />
          <s.RecordInfoWrapper>
            <UserTier />
            <UserChallengeInfo />
            <UserExerciseInfo />
          </s.RecordInfoWrapper>
          <AuxiliaryExplanation />
        </s.TextInfoWrapper>
      </s.Wrapper>
    </Paper>
  );
};

export default UserInfoSummary;
