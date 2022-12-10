import React from "react";
import PageTemplate from "@pages/PageTemplate";
import NotificationItem from "@components/NotificationItem";
import useNotificationHistory from "@hooks/query/notification/useNotificationHistory";
import * as s from "./style";

const NotificationPage = () => {
  const { notificationHistory, fetchTenMoreNotification } = useNotificationHistory();

  return (
    <PageTemplate title="알림" isRoot={false}>
      <s.Wrapper>
        <s.NotiList>
          {notificationHistory.map(({ name, profile_image, time_stamp, alarm_type, check }) => (
            <NotificationItem
              key={`${name}${time_stamp}`}
              isRead={Boolean(check)}
              senderName={name}
              senderProfileImage={profile_image}
              timeStamp={time_stamp}
              alarmType={alarm_type}
            />
          ))}
        </s.NotiList>
      </s.Wrapper>
    </PageTemplate>
  );
};

export default NotificationPage;
