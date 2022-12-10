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
};

export default FollowAPI;
