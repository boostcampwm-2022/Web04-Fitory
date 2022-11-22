import React from "react";
import PageTemplate from "@pages/PageTemplate";
import UserInfoSummary from "@components/UserInfoSummary";
import CalendarHeatMap from "@components/CalendarHeatMap";
import arrowRightSrc from "@public/icons/btn_arrow_right.svg";
import * as s from "./style";

const HomePage = () => {
  return (
    <PageTemplate isRoot>
      <s.Wrapper>
        <UserInfoSummary />
        <s.ChallengeButton type="button">
          <h3>3대 챌린지 도전하기</h3>
          <img src={arrowRightSrc} alt="3대 챌린지 도전하기 버튼" />
        </s.ChallengeButton>
        <CalendarHeatMap />
        {/* 운동 기록 캘린더 */}
        <s.RecordButton type="button">운동 기록하기</s.RecordButton>
      </s.Wrapper>
    </PageTemplate>
  );
};

export default HomePage;
