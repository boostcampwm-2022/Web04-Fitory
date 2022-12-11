import React from "react";
import profileSrc from "@public/images/img_default_profile.svg";
import { NotificationState, NotificationRead } from "@constants/enums";
import useUserInfo from "@hooks/query/user/useUserInfo";
import { authStorage } from "src/services/ClientStorage";
import * as s from "./style";

interface NotificationItemProps {
  isRead: boolean;
  senderName: string;
  senderProfileImage: string;
  timeStamp: string;
  alarmType: NotificationState;
}

const NotificationItem = ({
  isRead,
  senderName,
  senderProfileImage,
  timeStamp,
  alarmType,
}: NotificationItemProps) => {
  const { userInfo } = useUserInfo(authStorage.get());

  return (
    <s.Wrapper isRead={isRead}>
      <s.ProfileImage src={profileSrc} alt="프로필 이미지" />
      <s.TextWrapper>
        <s.NotiState>
          {alarmType === NotificationState.EXERCISE ? "운동 완료" : "새로운 팔로워"}
        </s.NotiState>
        <s.NotiContent>
          {alarmType === NotificationState.EXERCISE ? (
            <>
              <span>{senderName}</span>님이 오늘의 운동을 완료했어요.
            </>
          ) : (
            <>
              <span>{senderName}</span>님이 <span>{userInfo.name}</span>님을 팔로우하기 시작했어요.
            </>
          )}
        </s.NotiContent>
        <s.NotiTime>{timeStamp}</s.NotiTime>
      </s.TextWrapper>
    </s.Wrapper>
  );
};

export default NotificationItem;
