import React from "react";
import ProfileImageContainer from "@components/ProfileImageContainer";
import useUserInfo from "@hooks/query/useUserInfo";
import { useNavigate } from "react-router-dom";
import { PageState, TIER } from "@constants/enums";
import { getTierColor } from "@utils/getUserTierUtil";
import * as s from "./style";

const MyPageUserProfile = ({ userId, isOwner }: { userId: number; isOwner: boolean }) => {
  const { userInfo } = useUserInfo(userId);
  const navigate = useNavigate();

  const followerMove = () => {
    navigate(`/follow/${userId}`, {
      state: PageState.FOLLOWER,
    });
  };

  const followingMove = () => {
    navigate(`/follow/${userId}`, {
      state: PageState.FOLLOWING,
    });
  };

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
      <div>
        <s.UserNameLabel>{userInfo.name}</s.UserNameLabel>
        <s.UserIntroduceContainer>{userInfo.introduce}</s.UserIntroduceContainer>
      </div>
      <s.Wrapper>
        <s.ContentContainer>
          <s.ContentLabel>티어</s.ContentLabel>
          <s.TierContainer color={getTierColor(userInfo.tier)}>
            {TIER[userInfo.tier]}
          </s.TierContainer>
        </s.ContentContainer>
        <s.ContentContainer>
          <s.FollowButton onClick={followingMove}>
            <s.ContentLabel>팔로잉</s.ContentLabel>
            <s.FollowContainer>{userInfo.followingCount}</s.FollowContainer>
          </s.FollowButton>
        </s.ContentContainer>
        <s.ContentContainer>
          <s.FollowButton onClick={followerMove}>
            <s.ContentLabel>팔로워</s.ContentLabel>
            <s.FollowContainer>{userInfo.followerCount}</s.FollowContainer>
          </s.FollowButton>
        </s.ContentContainer>
      </s.Wrapper>
    </>
  );
};

export default MyPageUserProfile;
