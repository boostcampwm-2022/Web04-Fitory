import React, { useEffect, useState } from "react";
import FollowAPI from "@api/FollowAPI";
import UserAPI from "@api/UserAPI";
import * as s from "./style";
import { FollowUserInfo } from "../../types/user";

const FollowButton = ({ otherUserId, myUserId }: FollowUserInfo) => {
  const [followState, setFollowState] = useState(true);
  // false == 팔로우중 true: 팔로우 가능
  const handleButtonClick = async () => {
    if (followState) {
      return FollowAPI.follow({ myUserId, otherUserId });
    }
    return FollowAPI.unFollow({ myUserId, otherUserId });
  };
  useEffect(() => {
    (async () => {
      const ownerFollowList = await UserAPI.getFollowingUser(myUserId);
      ownerFollowList.map((user) => {
        if (user.follower_id === otherUserId) {
          return setFollowState(false);
        }
        return true;
      });
    })();
  }, [followState]);
  return (
    <s.ProfileButton followState={followState} type="button" onClick={handleButtonClick}>
      {followState ? "팔로우" : "팔로우 취소"}
    </s.ProfileButton>
  );
};

export default FollowButton;
