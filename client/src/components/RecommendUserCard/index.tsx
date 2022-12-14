import React from "react";
import Paper from "src/common/design/Paper";
import { useNavigate } from "react-router-dom";
import FollowButton from "@components/FollowButton";
import ProfileImageContainer from "src/common/design/ProfileImageContainer";
import { SearchedUserInfo } from "../../types/user";
import * as s from "./style";

const RecommendUserCard = ({ user }: { user: SearchedUserInfo }) => {
  const navigation = useNavigate();
  const handleClickRecommendProfile = () => {
    return navigation(`/profile/${user.user_id}`);
  };

  return (
    <Paper key={user.user_id}>
      <s.Wrapper>
        <s.UserInfoContainer onClick={handleClickRecommendProfile}>
          <s.ProfileImageContainerWrapper>
            <ProfileImageContainer isModified />
          </s.ProfileImageContainerWrapper>
          <s.UserNameLabel>{user.name}</s.UserNameLabel>
        </s.UserInfoContainer>
        <FollowButton profileId={user.user_id} />
      </s.Wrapper>
    </Paper>
  );
};

export default RecommendUserCard;
