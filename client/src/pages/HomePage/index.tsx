import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageTemplate from "@pages/PageTemplate";
import UserInfoSummary from "@components/UserInfoSummary";
import CalendarHeatMap from "@components/CalendarHeatMap";
import arrowRightSrc from "@public/icons/mark_arrow_right.svg";
import { RoutePath } from "@constants/enums";
import Calendar from "@components/Calendar";
import NotificationButton from "@components/NotificationButton";
// import useUserInfo from "@hooks/query/useUserInfo";
// import { authStorage } from "src/services/ClientStorage";
import * as s from "./style";

const HomePage = () => {
  const navigate = useNavigate();
  // const { userInfo } = useUserInfo(authStorage.get());
  // useEffect(() => {
  //   const userId = userInfo.id;
  //   const subscription = new EventSource(
  //     `http://localhost:8080/api/event/register?user_id=${userId}`,
  //     { withCredentials: true },
  //   );
  //   subscription.onmessage = (message) => {
  //     console.log(JSON.parse(message.data));
  //   };
  // }, []);

  return (
    <PageTemplate topNavRightItem={<NotificationButton />} isRoot>
      <s.Wrapper>
        <UserInfoSummary />
        <s.ChallengeButton type="button" onClick={() => navigate(RoutePath.CHALLENGE)}>
          <h3>3대 챌린지 도전하기</h3>
          <img src={arrowRightSrc} alt="3대 챌린지 도전하기 버튼" />
        </s.ChallengeButton>
        <CalendarHeatMap />
        <Calendar isRoot />
        <s.RecordButton type="button" onClick={() => navigate(RoutePath.RECORD)}>
          운동 기록하기
        </s.RecordButton>
      </s.Wrapper>
    </PageTemplate>
  );
};

export default HomePage;
