import React, { useEffect, useState } from "react";
import UserAPI from "@api/UserAPI";
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
      console.log(ownerId);
      const ownerFollowList = await UserAPI.getFollowingUser(ownerId);
    })();
  }, [followState]);
  return (
    <s.Wrapper>
      <s.ProfileButton>{followState ? "팔로우" : "언팔로우"}</s.ProfileButton>
    </s.Wrapper>
  );
};

export default FollowButton;
