import HttpClient from "src/services/HttpClient";
import * as UserType from "src/types/user";

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
    const response = await HttpClient.get(path, { id: userId });
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
};

export default UserAPI;
