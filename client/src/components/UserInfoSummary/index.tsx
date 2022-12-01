import React from "react";
import Paper from "@components/design/Paper";
import { TIER } from "@constants/enums";
import useUserInfo from "@hooks/query/useUserInfo";
import useExerciseProfile from "@hooks/query/useExerciseProfile";
import useBestChallengeScore from "@hooks/query/useBestChallengeScore";
import convertWeightUnits from "@utils/convertWeightUnits";
import * as s from "./style";

const UserInfoSummary = () => {
  const { userInfo } = useUserInfo();
  const { exerciseProfile } = useExerciseProfile();
  const { bestChallengeScore } = useBestChallengeScore();

  return (
    <Paper style={{ width: "100%" }}>
      <s.Wrapper>
        <s.TextInfoWrapper>
          <s.UserName>{userInfo.name}</s.UserName>
          <s.RecordInfoWrapper>
            <s.RecordInfo>
              <p>티어</p>
              <s.Tier tier={userInfo.tier ? TIER[userInfo.tier] : null}>
                {userInfo.tier ? TIER[userInfo.tier] : "-"}
              </s.Tier>
            </s.RecordInfo>
            <s.RecordInfo>
              <p>3대 챌린지</p>
              <s.RecordResult>
                {bestChallengeScore ? convertWeightUnits(bestChallengeScore.SBD_sum) : "-"}
              </s.RecordResult>
            </s.RecordInfo>
            <s.RecordInfo>
              <p>누적 중량</p>
              <s.RecordResult>{convertWeightUnits(exerciseProfile.totalVolume)}</s.RecordResult>
            </s.RecordInfo>
            <s.RecordInfo>
              <p>운동 횟수</p>
              <s.RecordResult>{exerciseProfile.totalExerciseDate}</s.RecordResult>
            </s.RecordInfo>
          </s.RecordInfoWrapper>
          {!bestChallengeScore && (
            <s.ChallengeRequestText>* 3대 챌린지 완료 시 티어가 부여됩니다.</s.ChallengeRequestText>
          )}
        </s.TextInfoWrapper>
      </s.Wrapper>
    </Paper>
  );
};

export default UserInfoSummary;
