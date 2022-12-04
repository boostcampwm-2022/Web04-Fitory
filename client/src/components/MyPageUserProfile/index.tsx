import React from "react";
import styled from "styled-components";
import ProfileImageContainer from "@components/ProfileImageContainer";

const MyPageUserProfile = () => {
  return (
    <>
      <MyProfileContainer>
        <PageLabel>마이페이지</PageLabel>
        <UserInfoContainer>
          <UserProfileImgContainer>
            <ProfileImageContainer isModified />
          </UserProfileImgContainer>
          <UserInfo>
            <p>나이 만 24세</p>
            <p>성별 남</p>
            <p>신장 223cm</p>
            <p>체중 11kg</p>
          </UserInfo>
        </UserInfoContainer>
      </MyProfileContainer>
      <DetailInfoContainer>
        <p>정보란</p>
      </DetailInfoContainer>
    </>
  );
};

export default MyPageUserProfile;

export const MyProfileContainer = styled.div`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 30px;
`;

export const PageLabel = styled.label`
  font-size: ${({ theme }) => theme.FONT_SIZE.EXTRA_LARGE};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
`;

export const UserInfoContainer = styled.div`
  margin-top: 20px;
  display: flex;
`;

export const UserProfileImgContainer = styled.div`
  width: 150px;
  height: 150px;
`;

export const UserInfo = styled.div``;

export const DetailInfoContainer = styled.div``;
