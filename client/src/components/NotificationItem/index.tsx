import React from "react";
import profileSrc from "@public/images/img_default_profile.svg";
import { NotificationState } from "@constants/enums";
import * as s from "./style";

interface NotificationItemProps {
  alarmType: NotificationState; // UI 테스트를 위해 임시로 사용
}

const NotificationItem = ({ alarmType }: NotificationItemProps) => {
  return (
    <s.Wrapper>
      <s.ProfileImage src={profileSrc} alt="프로필 이미지" />
      <s.TextWrapper>
        <s.NotiState>
          {alarmType === NotificationState.EXERCISE ? "운동 완료" : "새로운 팔로워"}
        </s.NotiState>
        <s.NotiContent>
          {alarmType === NotificationState.EXERCISE ? (
            <>
              <span>부산사나이이진재</span>님이 오늘의 운동을 완료했어요.
            </>
          ) : (
            <>
              <span>부산사나이이진재</span>님이 <span>대구사나이김동규</span>님을 팔로우하기
              시작했어요.
            </>
          )}
        </s.NotiContent>
        <s.NotiTime>1시간 전</s.NotiTime>
      </s.TextWrapper>
    </s.Wrapper>
  );
};

export default NotificationItem;
