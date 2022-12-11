import React from "react";
import { useNavigate } from "react-router-dom";
import defaultProfileSrc from "@public/images/img_default_profile.svg";
import { NotificationState, RoutePath } from "@constants/enums";
import { DEFAULT_IMAGE_SRC } from "@constants/consts";
import * as s from "./style";

interface NotificationItemProps {
  isRead: boolean;
  senderId: number;
  senderName: string;
  senderProfileImage: string;
  timeStamp: string;
  alarmType: NotificationState;
}

const NotificationItem = ({
  isRead,
  senderId,
  senderName,
  senderProfileImage,
  timeStamp,
  alarmType,
}: NotificationItemProps) => {
  const navigate = useNavigate();
  const handleClickSenderName = () => {
    navigate(`${RoutePath.PROFILE}/${senderId}`);
  };

  return (
    <s.Wrapper isRead={isRead}>
      <s.ProfileImage
        src={senderProfileImage === DEFAULT_IMAGE_SRC ? defaultProfileSrc : senderProfileImage}
        alt="프로필 이미지"
      />
      <s.TextWrapper>
        <s.NotiState>
          {alarmType === NotificationState.EXERCISE ? "운동 완료" : "새로운 팔로워"}
        </s.NotiState>
        <s.NotiContent>
          {alarmType === NotificationState.EXERCISE ? (
            <>
              <s.SenderNameButton onClick={handleClickSenderName}>{senderName}</s.SenderNameButton>
              님이 오늘의 운동을 완료했어요.
            </>
          ) : (
            <>
              <s.SenderNameButton onClick={handleClickSenderName}>{senderName}</s.SenderNameButton>
              님이 회원님을 팔로우하기 시작했어요.
            </>
          )}
        </s.NotiContent>
        <s.NotiTime>{timeStamp}</s.NotiTime>
      </s.TextWrapper>
    </s.Wrapper>
  );
};

export default NotificationItem;
