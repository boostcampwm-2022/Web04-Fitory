import HttpClient from "src/services/HttpClient";
import { LoginResponse, LoginUserInfo, JoinUserInfo, UserInfo } from "src/types/user";

const UserAPI = {
  googleLogin: async ({ access_token }: LoginUserInfo) => {
    const path = process.env.POST_GOOGLE_OAUTH_API as string;
    const response = await HttpClient.post(path, { access_token });

    return response.response as LoginResponse;
  },

  join: async (userInfo: JoinUserInfo) => {
    const path = process.env.POST_JOIN_API as string;
    const response = await HttpClient.post(path, userInfo);

    return response.ok;
  },

  getUser: async () => {
    const path = process.env.GET_USER_API as string;
    const response = await HttpClient.get(path);

    return response.response as UserInfo;
  },
};

export default UserAPI;
