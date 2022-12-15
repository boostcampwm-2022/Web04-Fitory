import React, { useEffect } from "react";
import { useQueryClient } from "react-query";
import ProfileImageContainer from "@components/ProfileImageContainer";
import { useNavigate } from "react-router-dom";
import { PageState, TierName, QueryKey } from "@constants/enums";
import { getTierColor } from "@utils/getUserTierUtil";

import { UserInfo } from "src/types/user";
import MyPageEditButton from "@components/MyPageEditButton";
import FollowButton from "@components/FollowButton";
import * as s from "./style";
import { authStorage } from "../../services/ClientStorage";

const MyPageUserProfile = ({ userInfo }: { userInfo: UserInfo }) => {
  const queryClient = useQueryClient();
  const isOwner = userInfo.id === authStorage.get();
  const navigate = useNavigate();

  const followerMove = () => {
    navigate(`/follow/${userInfo.id}`, {
      state: PageState.FOLLOWER,
    });
  };

  const followingMove = () => {
    navigate(`/follow/${userInfo.id}`, {
      state: PageState.FOLLOWING,
    });
  };

  useEffect(() => {
    if (isOwner) {
      console.log("test");
      queryClient.invalidateQueries([QueryKey.USER_INFO, authStorage.get()]);
    }
  }, [isOwner, queryClient]);

  return (
    <>
      <s.UserInfoContainer>
        <s.UserProfileImgContainer>
          <ProfileImageContainer isModified profileImgUrl={userInfo.profileImage as string} />
        </s.UserProfileImgContainer>
        <s.UserNameWrapper>
          <s.UserNameLabel>{userInfo.name}</s.UserNameLabel>
          <s.UserIntroduceContainer>{userInfo.introduce}</s.UserIntroduceContainer>
        </s.UserNameWrapper>
      </s.UserInfoContainer>
      <s.UserInfoRow>
        <s.UserInformation>
          <s.InfoLabel>나이</s.InfoLabel>
          <p>{userInfo.age}</p>
        </s.UserInformation>
        <s.UserInformation>
          <s.InfoLabel>성별</s.InfoLabel>
          {userInfo.gender === 0 ? "남" : "여"}
        </s.UserInformation>
        <s.UserInformation>
          <s.InfoLabel>신장</s.InfoLabel>
          <p>{userInfo.height}cm</p>
        </s.UserInformation>
        <s.UserInformation>
          <s.InfoLabel>체중</s.InfoLabel>
          <p>{userInfo.weight}kg</p>
        </s.UserInformation>
      </s.UserInfoRow>
      <s.Wrapper>
        <s.ContentContainer>
          <s.ContentLabel>티어</s.ContentLabel>
          <s.TierContainer color={getTierColor(userInfo.tier)}>
            {TierName[userInfo.tier] || "-"}
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
      <s.ButtonContainer>
        {isOwner ? <MyPageEditButton /> : <FollowButton profileId={userInfo.id} />}
      </s.ButtonContainer>
    </>
  );
};

export default MyPageUserProfile;
