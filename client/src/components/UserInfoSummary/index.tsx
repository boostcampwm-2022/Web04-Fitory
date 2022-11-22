import React from "react";
import Paper from "@components/design/Paper";
import { Tier } from "@constants/enums";
import * as s from "./style";

const UserInfoSummary = () => {
  /**
   * isChallenge flag를 이용한 기록 여부 제어 방식은 임시입니다.
   * 후에 사용자 정보 API 연동 시 변동됩니다.
   */
  const isChallenge = false;

  return (
    <Paper style={{ width: "100%" }}>
      <s.Wrapper>
        <s.TextInfoWrapper>
          <s.UserName>대구사나이김동규</s.UserName>
          <s.RecordInfoWrapper>
            <s.RecordInfo>
              <p>티어</p>
              <s.Tier tier={isChallenge ? Tier.CHAMPION : null}>
                {isChallenge ? Tier.CHAMPION : "-"}
              </s.Tier>
            </s.RecordInfo>
            <s.RecordInfo>
              <p>3대 챌린지</p>
              <s.RecordResult>{isChallenge ? "410kg" : "-"}</s.RecordResult>
            </s.RecordInfo>
            <s.RecordInfo>
              <p>누적 중량</p>
              <s.RecordResult>2.3t</s.RecordResult>
            </s.RecordInfo>
            <s.RecordInfo>
              <p>총 운동 횟수</p>
              <s.RecordResult>142</s.RecordResult>
            </s.RecordInfo>
          </s.RecordInfoWrapper>
          {!isChallenge && (
            <s.ChallengeRequestText>* 3대 챌린지 완료 시 티어가 부여됩니다.</s.ChallengeRequestText>
          )}
        </s.TextInfoWrapper>
      </s.Wrapper>
    </Paper>
  );
};

export default UserInfoSummary;
