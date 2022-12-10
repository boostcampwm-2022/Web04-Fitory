import React from "react";
import useUserInfo from "@hooks/query/user/useUserInfo";
import useBestChallengeScore from "@hooks/query/challenge/useBestChallengeScore";
import { Gender } from "@constants/enums";
import { authStorage } from "src/services/ClientStorage";
import * as s from "./style";

const StatisticsUserInfoContainer = () => {
  const { userInfo } = useUserInfo(authStorage.get());
  const { bestChallengeScore } = useBestChallengeScore();

  return (
    <s.Container>
      <s.UserDataWrapper>
        <s.Label>성별</s.Label>
        <s.Data>{userInfo.gender === Gender.MALE ? "남" : "여"}</s.Data>
      </s.UserDataWrapper>
      <s.UserDataWrapper>
        <s.Label>체중</s.Label>
        <s.Data>{userInfo.weight}kg</s.Data>
      </s.UserDataWrapper>
      <s.UserDataWrapper>
        <s.Label>3대 챌린지</s.Label>
        <s.Data>{bestChallengeScore?.SBD_sum || "-"}</s.Data>
      </s.UserDataWrapper>
    </s.Container>
  );
};

export default StatisticsUserInfoContainer;
