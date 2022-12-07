import React from "react";
import ProfileImageContainer from "@components/ProfileImageContainer";
import FollowButton from "@components/FollowButton";
import useUserInfo from "@hooks/query/useUserInfo";
import * as s from "./style";
import { authStorage } from "../../services/ClientStorage";

export interface SearchResultUserProfileProps {
  profileImgUrl?: string;
  userName: string;
  userMessage?: string;
  profileId?: number;
}

const SearchResultUserProfile = ({
  profileImgUrl,
  userName,
  userMessage,
  profileId,
}: SearchResultUserProfileProps) => {
  const { userInfo } = useUserInfo(authStorage.get());
  const { id } = userInfo;
  return (
    <s.Wrapper>
      <s.ProfileContainer>
        <s.ProfileImgContainer>
          <ProfileImageContainer isModified profileImgUrl={profileImgUrl} />
        </s.ProfileImgContainer>
        <s.UserInfoContainer>
          <s.UserNameContainer>{userName}</s.UserNameContainer>
          <s.UserMessageContainer userMessage={userMessage}>
            {userMessage || "―"}
          </s.UserMessageContainer>
        </s.UserInfoContainer>
      </s.ProfileContainer>
      <s.ButtonContainer>
        <FollowButton userId={profileId as number} ownerId={id} />
      </s.ButtonContainer>
    </s.Wrapper>
  );
};

export default SearchResultUserProfile;
