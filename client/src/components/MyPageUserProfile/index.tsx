import React from "react";
import ProfileImageContainer from "@components/ProfileImageContainer";
import useUserInfo from "@hooks/query/useUserInfo";
import * as s from "./style";
import { authStorage } from "../../services/ClientStorage";

const MyPageUserProfile = ({ userId }: { userId: number }) => {
  const { userInfo } = useUserInfo(userId);

  return (
    <>
      <s.PageLabel>마이페이지</s.PageLabel>
      <s.UserInfoContainer>
        <s.UserProfileImgContainer>
          <ProfileImageContainer isModified profileImgUrl={userInfo.profileImage as string} />
        </s.UserProfileImgContainer>
        <s.UserInfoRow>
          <s.UserInformation>
            <s.InfoLabel>나이</s.InfoLabel> {userInfo.age}
          </s.UserInformation>
          <s.UserInformation>
            <s.InfoLabel>성별</s.InfoLabel>
            {userInfo.gender === 0 ? "남" : "여"}
          </s.UserInformation>
          <s.UserInformation>
            <s.InfoLabel>신장</s.InfoLabel> {userInfo.height}cm
          </s.UserInformation>
          <s.UserInformation>
            <s.InfoLabel>체중</s.InfoLabel> {userInfo.weight}kg
          </s.UserInformation>
        </s.UserInfoRow>
      </s.UserInfoContainer>
    </>
  );
};

export default MyPageUserProfile;
