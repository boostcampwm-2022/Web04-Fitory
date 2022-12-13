import React, { useEffect, useState } from "react";
import useFollowUserList from "@hooks/query/follow/useFollowUserList";
import useFollow from "@hooks/query/follow/useFollow";
import useUnfollow from "@hooks/query/follow/useUnfollow";
import { authStorage } from "src/services/ClientStorage";
import * as s from "./style";

const FollowButton = ({ profileId }: { profileId: number }) => {
  const { followList } = useFollowUserList(authStorage.get(), false);
  const { follow } = useFollow();
  const { unfollow } = useUnfollow();
  const [isFollowed, setIsFollowed] = useState(false);

  const handleClickFollowButton = () => {
    if (isFollowed) {
      unfollow(profileId);
      return;
    }
    follow(profileId);
  };

  useEffect(() => {
    const foundUser = followList.find(({ followed_id }) => followed_id === profileId);
    setIsFollowed(Boolean(foundUser));
  }, [followList, profileId]);

  return (
    <s.ProfileButton isFollowed={isFollowed} type="button" onClick={handleClickFollowButton}>
      {isFollowed ? "팔로잉" : "팔로우"}
    </s.ProfileButton>
  );
};

export default FollowButton;
