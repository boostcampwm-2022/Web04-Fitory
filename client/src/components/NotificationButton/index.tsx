import React from "react";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "@constants/enums";
import notificationSrc from "@public/icons/btn_notification.svg";
import * as s from "./style";

const NotificationButton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(RoutePath.NOTIFICATION);
  };

  return (
    <s.Button onClick={handleClick}>
      <img src={notificationSrc} alt="알림 버튼" />
    </s.Button>
  );
};

export default NotificationButton;
