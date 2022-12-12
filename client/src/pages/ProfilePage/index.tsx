import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PageTemplate from "@pages/PageTemplate";
import MyPageUserProfile from "@components/MyPageUserProfile";
import MyPageEditButton from "@components/MyPageEditButton";
import FollowButton from "@components/FollowButton";
import CalendarHeatMap from "@components/CalendarHeatMap";
import RoutineScroller from "@components/RoutineScroller";
import LogoutButton from "@components/LogoutButton";
import useUserInfo from "@hooks/query/user/useUserInfo";
import { RoutePath, QueryKey } from "@constants/enums";
import { authStorage } from "src/services/ClientStorage";
import * as s from "./style";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const profileUserId = userId ? +userId : authStorage.get();
  const { userInfo } = useUserInfo(profileUserId);
  const isOwner = profileUserId === authStorage.get();

  return (
    <PageTemplate isRoot={isOwner} title="프로필">
      <s.MyProfileContainer>
        <MyPageUserProfile userInfo={userInfo} />
        <s.ButtonContainer>
          {isOwner ? (
            <MyPageEditButton userId={profileUserId} ownerId={id} isOwner={isOwner} />
          ) : (
            <FollowButton userInfo={userInfo} />
          )}
        </s.ButtonContainer>
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
