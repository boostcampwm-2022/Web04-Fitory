import { toast } from "react-toastify";
import { error } from "@constants/message";
import HttpClient from "src/services/HttpClient";
import * as UserType from "src/types/user";

const FollowAPI = {
  follow: async ({ myUserId, otherUserId }: UserType.FollowUserInfo) => {
    try {
      const path = "follow/doFollow";
      const response = await HttpClient.post(path, { myUserId, otherUserId });
      return response.response as { message: string };
    } catch {
      toast.error(error.FOLLOW);
      return null;
    }
  },

  unFollow: async ({ myUserId, otherUserId }: UserType.FollowUserInfo) => {
    try {
      const path = "follow/cancel";
      const response = await HttpClient.post(path, { myUserId, otherUserId });
      return response.response as { message: string };
    } catch {
      toast.error(error.UNFOLLOW);
      return null;
    }
  },

  getFollowerUser: async (userId: UserType.UserId) => {
    try {
      const path = "follow/follower";
      const response = await HttpClient.get(path, { userId });
      const { followerUserProfileList } = response.response as {
        followerUserProfileList: UserType.SearchedUserInfo[];
      };
      return followerUserProfileList;
    } catch {
      toast.error(error.GET_FOLLOWER);
      return null;
    }
  },

  getFollowingUser: async (userId: UserType.UserId) => {
    try {
      const path = "follow/following";
      const response = await HttpClient.get(path, { userId });
      const { followingUserProfileList } = response.response as {
        followingUserProfileList: UserType.SearchedUserInfo[];
      };
      return followingUserProfileList;
    } catch {
      toast.error(error.GET_FOLLOWING);
      return null;
    }
  },
};

export default FollowAPI;
