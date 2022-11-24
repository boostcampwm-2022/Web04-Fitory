import React from "react";
import ProfileImageContainer from "@components/ProfileImageContainer";
import * as s from "./style";

export interface SearchResultUserProfileProps {
  profileImgUrl?: string;
  userName: string;
  userMessage?: string;
}

const SearchResultUserProfile = ({
  profileImgUrl,
  userName,
  userMessage,
}: SearchResultUserProfileProps) => {
  return (
    <s.Wrapper>
      <s.ProfileContainer>
        <s.ProfileImgContainer>
          <ProfileImageContainer isModified profileImgUrl={profileImgUrl} />
        </s.ProfileImgContainer>
        <s.UserInfoContainer>
          <s.UserNameContainer>{userName}</s.UserNameContainer>
          <s.UserMessageContainer userMessage={userMessage}>
            {userMessage || "등록된 자기소개가 없습니다."}
          </s.UserMessageContainer>
        </s.UserInfoContainer>
      </s.ProfileContainer>
    </s.Wrapper>
  );
};

export default SearchResultUserProfile;
