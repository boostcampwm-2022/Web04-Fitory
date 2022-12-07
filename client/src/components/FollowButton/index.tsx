import React, { useEffect, useState } from "react";
import UserAPI from "@api/UserAPI";
import * as s from "./style";

interface MyPageButtonProp {
  userId: number;
  ownerId: number;
}

const FollowButton = ({ userId, ownerId }: MyPageButtonProp) => {
  const [followState, setFollowState] = useState(true);
  useEffect(() => {
    (async () => {
      const ownerFollowList = await UserAPI.getFollowingUser(ownerId);
      ownerFollowList.map((user) => {
        if (user.follower_id === userId) {
          return setFollowState(false);
        }
        return true;
      });
    })();
  }, [followState]);
  return <s.ProfileButton>{followState ? "팔로우" : "언팔로우"}</s.ProfileButton>;
};

export default FollowButton;
