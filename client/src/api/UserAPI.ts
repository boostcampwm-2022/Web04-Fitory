import HttpClient from "src/services/HttpClient";
import { LoginResponse, JoinResponse, LoginUserInfo, JoinUserInfo, UserInfo } from "src/types/user";

const UserAPI = {
  googleLogin: async ({ access_token }: LoginUserInfo) => {
    const path = "oauth/google/login";
    const response = await HttpClient.post(path, { access_token });

    return response.response as LoginResponse;
  },

  join: async (userInfo: JoinUserInfo) => {
    const path = "oauth/google/register";
    const response = await HttpClient.post(path, userInfo);

    return response.response as JoinResponse;
  },

  getUser: async () => {
    const path = "users/get";
    const response = await HttpClient.get(path);

    return response.response as UserInfo;
  },

  checkExistUserName: async (userName: string) => {
    try {
      const path = "users/checkName";
      await HttpClient.get(path, { userName });
      return true;
    } catch {
      return false;
    }
  },
};

export default UserAPI;
