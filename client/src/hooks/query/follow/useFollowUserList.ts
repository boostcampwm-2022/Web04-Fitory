/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "react-query";
import { QueryKey } from "@constants/enums";
import FollowAPI from "@api/FollowAPI";
import { UserId, SearchedUserInfo } from "src/types/user";

const useFollowUserList = (userId: UserId, isFollower: boolean) => {
  const { data } = isFollower
    ? useQuery(QueryKey.FOLLOWERLIST, () => FollowAPI.getFollowerUser(userId))
    : useQuery(QueryKey.FOLLOWINGLIST, () => FollowAPI.getFollowingUser(userId));

  return { followList: data?.sort((a, b) => (a.name < b.name ? -1 : 1)) as SearchedUserInfo[] };
};

export default useFollowUserList;
