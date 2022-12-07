import React from "react";
import { useParams } from "react-router-dom";
import PageTemplate from "@pages/PageTemplate";
import MyPageUserProfile from "@components/MyPageUserProfile";
import MyPageUserIntroduce from "@components/MyPageUserIntroduce";
import MyPageSubInfoContainer from "@components/MyPageSubInfoContainer";
import MyPageEditButton from "@components/MyPageEditButton";
import useUserInfo from "@hooks/query/useUserInfo";
import FollowButton from "@components/FollowButton";
import * as s from "./style";
import { authStorage } from "../../services/ClientStorage";

const ProfilePage = () => {
  const { userId } = useParams();
  const { userInfo } = useUserInfo(authStorage.get());
  const { id } = userInfo;
  const profileUserId = userId ? parseInt(userId as string, 10) : authStorage.get();
  const isOwner = profileUserId === id;

  return (
    <PageTemplate isRoot={isOwner}>
      <s.MyProfileContainer>
        <MyPageUserProfile userId={profileUserId} isOwner={isOwner} />
        <MyPageUserIntroduce userId={profileUserId} isOwner={isOwner} />
        <MyPageSubInfoContainer userId={profileUserId} />
        <s.ButtonContainer>
          {isOwner ? (
            <MyPageEditButton userId={profileUserId} ownerId={id} isOwner={isOwner} />
          ) : (
            <FollowButton otherUserId={profileUserId as number} myUserId={id} />
          )}
        </s.ButtonContainer>
      </s.MyProfileContainer>
    </PageTemplate>
  );
};

export default ProfilePage;
