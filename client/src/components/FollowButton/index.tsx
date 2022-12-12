import React, { useEffect, useState } from "react";
import FollowAPI from "@api/FollowAPI";
import UserAPI from "@api/UserAPI";
import { useQueryClient } from "react-query";
import { QueryKey } from "@constants/enums";
import * as s from "./style";
import { authStorage } from "../../services/ClientStorage";

const FollowButton = ({ userId }: { userId: number }) => {
  const [followState, setFollowState] = useState(true);
  const myUserId = authStorage.get();
  const otherUserId = userId;
  const queryClient = useQueryClient();
  const handleButtonClick = async () => {
    await (() => {
      if (followState) {
        return FollowAPI.follow({ myUserId, otherUserId });
      }
      return FollowAPI.unFollow({ myUserId, otherUserId });
    })();
    setFollowState(!followState);
    return queryClient.invalidateQueries([QueryKey.USER_INFO, otherUserId]);
  };

  useEffect(() => {
    (async () => {
      const ownerFollowList = await UserAPI.getFollowingUser(myUserId);
      ownerFollowList.map((user) => {
        if ((user.follower_id || user.followed_id) === otherUserId) {
          return setFollowState(false);
        }
        return true;
      });
    })();
  }, []);
  return (
    <s.ProfileButton followState={followState} type="button" onClick={handleButtonClick}>
      {followState ? "팔로우" : "팔로우 취소"}
    </s.ProfileButton>
  );
};

export default FollowButton;
