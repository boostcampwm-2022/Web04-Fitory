import HttpClient from "src/services/HttpClient";
import * as UserType from "src/types/user";
import { authStorage } from "../services/ClientStorage";

const UserAPI = {
  googleLogin: async ({ access_token }: UserType.LoginUserInfo) => {
    const path = "oauth/google/login";
    const response = await HttpClient.post(path, { access_token });

    return response.response as UserType.LoginResponse;
  },

  join: async (userInfo: UserType.JoinUserInfo) => {
    const path = "oauth/google/register";
    const response = await HttpClient.post(path, userInfo);

    return response.response as UserType.JoinResponse;
  },

  getUser: async (userId: UserType.UserId) => {
    const path = `users/get`;
    const response = await HttpClient.get(path, { userId });
    const { user } = response.response as { user: UserType.UserInfo };

    return user;
  },

  checkExistUserName: async (userName: string) => {
    const path = "users/checkName";
    const response = await HttpClient.get(path, { userName });
    const { userExists } = response.response as { userExists: boolean };
    return userExists;
  },

  getUserList: async () => {
    const path = "users/profile/list";
    const response = await HttpClient.get(path);
    const { userProfileList } = response.response as {
      userProfileList: UserType.SearchedUserInfo[];
    };

    return userProfileList;
  },

  getFollowerUser: async (userId: number) => {
    const path = "follow/follower";
    const response = await HttpClient.get(path, { userId });
    console.log(response.response);
  },

  getFollowingUser: async (userId: number) => {
    const path = "follow/following";
    const response = await HttpClient.get(path, { userId });
    const { followingUserProfileList } = response.response as {
      followingUserProfileList: UserType.SearchedUserInfo[];
    };
    console.log(followingUserProfileList);

    return followingUserProfileList;
  },

  getRecommendUserList: async () => {
    const userId = authStorage.get();
    if (!userId) {
      throw new Error();
    }
    const path = "users/recommand/list";
    const response = await HttpClient.get(path, { userId });
    return [response.response.recommendWeight, response.response.recommendAge] as [
      UserType.SearchedUserInfo[],
      UserType.SearchedUserInfo[],
    ];
  },
};

export default UserAPI;
