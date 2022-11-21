import React from "react";
import Paper from "@components/design/Paper";
import { Tier } from "@constants/enums";
import * as s from "./style";

const UserInfoSummary = () => {
  return (
    <Paper style={{ width: "100%" }}>
      <s.Wrapper>
        <s.TextInfoWrapper>
          <s.UserName>대구사나이김동규</s.UserName>
          <s.RecordInfoWrapper>
            <s.RecordInfo>
              <p>티어</p>
              <s.Tier tier={Tier.CHAMPION}>{Tier.CHAMPION}</s.Tier>
            </s.RecordInfo>
            <s.RecordInfo>
              <p>3대 챌린지</p>
              <s.RecordResult>410kg</s.RecordResult>
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
        </s.TextInfoWrapper>
      </s.Wrapper>
    </Paper>
  );
};

export default UserInfoSummary;
