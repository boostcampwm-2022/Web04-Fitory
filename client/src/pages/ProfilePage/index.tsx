import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PageTemplate from "@pages/PageTemplate";
import MyPageUserProfile from "@components/MyPageUserProfile";
import MyPageEditButton from "@components/MyPageEditButton";
import FollowButton from "@components/FollowButton";
import CalendarHeatMap from "@components/CalendarHeatMap";
import RoutineScroller from "@components/RoutineScroller";
import useUserInfo from "@hooks/query/useUserInfo";
import { RoutePath, QueryKey } from "@constants/enums";
import { authStorage } from "src/services/ClientStorage";
import { useQueryClient } from "react-query";
import * as s from "./style";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const profileUserId = userId ? parseInt(userId as string, 10) : authStorage.get();
  const { userInfo } = useUserInfo(profileUserId);
  const isOwner = profileUserId === authStorage.get();
  const { id } = userInfo;

  const queryClient = useQueryClient();

  useEffect(() => {
    (() => {
      return queryClient.invalidateQueries([QueryKey.USER_INFO, id]);
    })();
  }, []);

  return (
    <PageTemplate isRoot={isOwner}>
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
        <CalendarHeatMap />
        <RoutineScroller
          userId={authStorage.get()}
          onClickRoutineItem={(routineName) => {
            navigate(RoutePath.RECORD, { state: { routineName } });
          }}
        />
      </s.BottomWrapper>
    </PageTemplate>
  );
};

export default ProfilePage;
