import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PageTemplate from "@pages/PageTemplate";
import MyPageUserProfile from "@components/MyPageUserProfile";
import MyPageEditButton from "@components/MyPageEditButton";
import useUserInfo from "@hooks/query/useUserInfo";
import FollowButton from "@components/FollowButton";
import { QueryKey } from "@constants/enums";
import { useQueryClient } from "react-query";
import UserAPI from "@api/UserAPI";
import { authStorage } from "../../services/ClientStorage";
import * as s from "./style";

const ProfilePage = () => {
  const { userId } = useParams();
  const profileUserId = userId ? parseInt(userId as string, 10) : authStorage.get();
  const { userInfo } = useUserInfo(profileUserId);
  const { id } = userInfo;
  const isOwner = profileUserId === authStorage.get();
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
    </PageTemplate>
  );
};

export default ProfilePage;
