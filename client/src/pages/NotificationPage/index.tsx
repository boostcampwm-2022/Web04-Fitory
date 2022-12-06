import React from "react";
import PageTemplate from "@pages/PageTemplate";
import NotificationItem from "@components/NotificationItem";
import { NotificationState } from "@constants/enums";
// import { Notification } from "src/types/notification";
import * as s from "./style";

const NotificationPage = () => {
  return (
    <PageTemplate title="알림" isRoot={false}>
      <s.Wrapper>
        <s.NotiList>
          <NotificationItem alarmType={NotificationState.EXERCISE} />
          <NotificationItem alarmType={NotificationState.FOLLOW} />
        </s.NotiList>
      </s.Wrapper>
    </PageTemplate>
  );
};

export default NotificationPage;
