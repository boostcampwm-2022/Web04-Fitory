import React from "react";
import styled from "styled-components";
import ProfileImageContainer from "@components/ProfileImageContainer";

const MyPageUserProfile = () => {
  return (
    <MyProfileContainer>
      <PageLabel>마이페이지</PageLabel>
      <UserInfoContainer>
        <UserProfileImgContainer>
          <ProfileImageContainer isModified />
        </UserProfileImgContainer>
        <UserInfo>
          <UserInformation>
            <InfoLabel>나이</InfoLabel> 만 24세
          </UserInformation>
          <UserInformation>
            <InfoLabel>성별</InfoLabel> 남
          </UserInformation>
          <UserInformation>
            <InfoLabel>신장</InfoLabel> 223cm
          </UserInformation>
          <UserInformation>
            <InfoLabel>체중</InfoLabel> 11kg
          </UserInformation>
        </UserInfo>
      </UserInfoContainer>
    </MyProfileContainer>
  );
};

export default MyPageUserProfile;

export const MyProfileContainer = styled.div`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 30px 5vw;
`;

export const PageLabel = styled.label`
  color: ${({ theme }) => theme.COLORS.DEEP_BLUE};
  font-size: ${({ theme }) => theme.FONT_SIZE.LARGE};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
`;

export const UserInfoContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  height: 100px;
`;

export const UserProfileImgContainer = styled.div`
  width: 30%;
  height: 100%;
`;

export const UserInfo = styled.div`
  margin-left: 10%;
  width: 50%;
  font-size: ${({ theme }) => theme.FONT_SIZE.EXTRA_SMALL};
  color: ${({ theme }) => theme.COLORS.DEEP_GRAY};
`;

export const UserInformation = styled.div`
  height: 25%;
  display: flex;
  align-items: center;
`;

export const InfoLabel = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE.EXTRA_SMALL};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
  color: ${({ theme }) => theme.COLORS.DEEP_BLUE};
  margin-right: 30px;
`;

export const DetailInfoContainer = styled.div``;
