import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import PageTemplate from "@pages/PageTemplate";
import MyPageUserProfile from "@components/MyPageUserProfile";
import CalendarHeatMap from "@components/CalendarHeatMap";
import RoutineScroller from "@components/RoutineScroller";
import LogoutButton from "@components/LogoutButton";
import NotificationButton from "@components/NotificationButton";
import useUserInfo from "@hooks/query/user/useUserInfo";
import { RoutePath } from "@constants/enums";
import { authStorage } from "src/services/ClientStorage";
import * as s from "./style";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { userId } = useParams();

  const profileUserId = userId ? +userId : authStorage.get();
  const isOwner = profileUserId === authStorage.get();

  const { userInfo } = useUserInfo(profileUserId);

  return (
    <PageTemplate isRoot={isOwner} title="프로필" topNavRightItem={<NotificationButton />}>
      <s.MyProfileContainer>
        <MyPageUserProfile userInfo={userInfo} />
      </s.MyProfileContainer>
      <s.BottomWrapper>
        <s.ZandiLabel>
          <span>{userInfo.name}</span>님의 파란 잔디
        </s.ZandiLabel>
        <CalendarHeatMap userId={profileUserId} />
        <RoutineScroller
          userId={profileUserId}
          onClickRoutineItem={(routineName) => {
            navigate(RoutePath.RECORD, {
              state: {
                userId: profileUserId,
                routineName,
              },
            });
          }}
        />
        {isOwner && <LogoutButton />}
      </s.BottomWrapper>
    </PageTemplate>
  );
};

export default ProfilePage;
