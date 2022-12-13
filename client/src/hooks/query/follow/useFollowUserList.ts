/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "react-query";
import { QueryKey } from "@constants/enums";
import FollowAPI from "@api/FollowAPI";
import { UserId, SearchedUserInfo } from "src/types/user";

const useFollowUserList = (userId: UserId, isFollower: boolean) => {
  const { data } = isFollower
    ? useQuery([QueryKey.FOLLOWERLIST, userId], () => FollowAPI.getFollowerUser(userId), {
        staleTime: 10000,
      })
    : useQuery([QueryKey.FOLLOWINGLIST, userId], () => FollowAPI.getFollowingUser(userId), {
        staleTime: 10000,
      });

  return { followList: data?.sort((a, b) => (a.name < b.name ? -1 : 1)) as SearchedUserInfo[] };
};

export default useFollowUserList;
