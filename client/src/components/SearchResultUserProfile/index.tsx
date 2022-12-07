import React from "react";
import ProfileImageContainer from "@components/ProfileImageContainer";
import FollowButton from "@components/FollowButton";
import useUserInfo from "@hooks/query/useUserInfo";
import { RoutePath } from "@constants/enums";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const { userInfo } = useUserInfo(authStorage.get());
  const { id } = userInfo;
  const handleClickEvent = () => {
    navigate(`${RoutePath.PROFILE}/${profileId}`);
  };
  return (
    <s.Wrapper>
      <s.ProfileContainer onClick={handleClickEvent}>
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
        <FollowButton otherUserId={profileId as number} myUserId={id} />
      </s.ButtonContainer>
    </s.Wrapper>
  );
};

export default SearchResultUserProfile;
