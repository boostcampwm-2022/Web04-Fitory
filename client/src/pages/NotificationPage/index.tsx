import React from "react";
import PageTemplate from "@pages/PageTemplate";
import NotificationItem from "@components/NotificationItem";
import useNotificationHistory from "@hooks/query/notification/useNotificationHistory";
import useIntersect from "@hooks/useIntersect";
import * as s from "./style";

const NotificationPage = () => {
  const { notificationHistory, fetchTenMoreNotification, isLoading } = useNotificationHistory();

  const intersectRef = useIntersect(() => {
    fetchTenMoreNotification();
  });

  return (
    <PageTemplate title="알림" isRoot={false}>
      <s.Wrapper>
        <s.NotiList>
          {notificationHistory.map(
            ({ index, name, profile_image, time_stamp, alarm_type, check, sender_user_id }) => (
              <NotificationItem
                key={index}
                isRead={Boolean(check)}
                senderId={sender_user_id}
                senderName={name}
                senderProfileImage={profile_image}
                timestamp={time_stamp}
                alarmType={alarm_type}
              />
            ),
          )}
        </s.NotiList>
        {isLoading && <s.Spinner />}
        <s.IntersectTarget ref={intersectRef} />
      </s.Wrapper>
    </PageTemplate>
  );
};

export default NotificationPage;
