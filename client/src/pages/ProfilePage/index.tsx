import React from "react";
import { useParams } from "react-router-dom";
import PageTemplate from "@pages/PageTemplate";
import MyPageUserProfile from "@components/MyPageUserProfile";
import MyPageEditButton from "@components/MyPageEditButton";
import useUserInfo from "@hooks/query/useUserInfo";
import FollowButton from "@components/FollowButton";
import { authStorage } from "src/services/ClientStorage";
import * as s from "./style";

const ProfilePage = () => {
  const { userId } = useParams();
  const profileUserId = userId ? parseInt(userId as string, 10) : authStorage.get();
  const { userInfo } = useUserInfo(profileUserId);
  const { id } = userInfo;
  const isOwner = profileUserId === authStorage.get();

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
    </PageTemplate>
  );
};

export default ProfilePage;
