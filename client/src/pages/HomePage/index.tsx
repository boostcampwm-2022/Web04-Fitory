import React from "react";
import PageTemplate from "@pages/PageTemplate";
import UserInfoSummary from "@components/UserInfoSummary";
import CalendarHeatMap from "@components/CalendarHeatMap";
import * as s from "./style";

const HomePage = () => {
  return (
    <PageTemplate isRoot>
      <s.Wrapper>
        <UserInfoSummary />
        {/* 3대 챌린지 도전하기 버튼 */}
        <CalendarHeatMap />
        {/* 운동 기록 캘린더 */}
        {/* 운동 기록하기 버튼 */}
      </s.Wrapper>
    </PageTemplate>
  );
};

export default HomePage;
