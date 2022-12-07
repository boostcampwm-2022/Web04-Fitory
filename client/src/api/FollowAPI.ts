import * as UserType from "../types/user";
import HttpClient from "../services/HttpClient";

const FollowAPI = {
  follow: async ({ myUserId, otherUserId }: UserType.FollowUserInfo) => {
    const path = "follow/doFollow";
    const response = await HttpClient.post(path, { myUserId, otherUserId });

    return response.response;
  },

  unFollow: async ({ myUserId, otherUserId }: UserType.FollowUserInfo) => {
    const path = "follow/cancel";
    const response = await HttpClient.post(path, { myUserId, otherUserId });

    return response.response;
  },
};

export default FollowAPI;