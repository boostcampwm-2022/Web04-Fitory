import React from "react";
import { PageState } from "@constants/enums";
import { useNavigate } from "react-router-dom";
import { getTierColor, getUserTierUtil } from "@utils/getUserTierUtil";
import useUserInfo from "@hooks/query/useUserInfo";
import * as s from "./style";

const MyPageSubInfoContainer = ({ userId }: { userId: number }) => {
  const navigate = useNavigate();
  const { userInfo } = useUserInfo(userId);

  const followerMove = () => {
    navigate("/follow", {
      state: PageState.FOLLOWER,
    });
  };

  const followingMove = () => {
    navigate("/follow", {
      state: PageState.FOLLOWING,
    });
  };
  return (
    <s.Wrapper>
      <s.ContentContainer>
        <s.ContentLabel>티어</s.ContentLabel>
        <s.TierContainer color={getTierColor(userInfo.tier)}>
          {getUserTierUtil(userInfo.tier)}
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
  );
};

export default MyPageSubInfoContainer;
