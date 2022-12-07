import React, { useEffect, useState } from "react";
import UserAPI from "@api/UserAPI";
import { SearchedUserInfo } from "../../types/user";
import * as s from "./style";

interface MyPageButtonProp {
  userId: number;
  ownerId: number;
  isOwner: boolean;
}

const FollowButton = ({ userId, ownerId, isOwner }: MyPageButtonProp) => {
  const [followState, setFollowState] = useState(true);
  useEffect(() => {
    (async () => {
      const ownerFollowList = await UserAPI.getFollowingUser(ownerId);
      ownerFollowList.map((user) => {
        if (user.follower_id === userId) {
          return setFollowState(false);
        }
      });
    })();
  }, [followState]);
  return (
    <s.Wrapper>
      <s.ProfileButton>{followState ? "팔로우" : "언팔로우"}</s.ProfileButton>
    </s.Wrapper>
  );
};

export default FollowButton;
