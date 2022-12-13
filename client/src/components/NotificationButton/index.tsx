import React from "react";
import { RoutePath } from "@constants/enums";
import notificationSrc from "@public/icons/btn_notification.svg";
import useNotificationCount from "@hooks/query/notification/useNotificationCount";
import { EventSourceProvider } from "src/contexts/EventSourceContext";
import * as s from "./style";

const NotificationButton = () => {
  const { notificationCount } = useNotificationCount();

  return (
    <EventSourceProvider>
      <s.NotificatonLink to={RoutePath.NOTIFICATION}>
        <img src={notificationSrc} alt="알림 페이지 이동 버튼" />
        {notificationCount > 0 && <s.NotificationCount>{notificationCount}</s.NotificationCount>}
      </s.NotificatonLink>
    </EventSourceProvider>
  );
};

export default NotificationButton;
