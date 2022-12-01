import { RoutePath } from "@constants/enums";
import HttpClient from "src/services/HttpClient";
import { authStorage } from "src/services/ClientStorage";
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
    try {
      const userId = authStorage.get();

      if (!userId) {
        return null;
      }

      const path = `users/get?id=${userId}`;
      const response = await HttpClient.get(path);
      const { user } = response.response as { user: UserInfo };

      return user;
    } catch {
      window.history.replaceState(null, "", RoutePath.LOGIN);
      window.location.reload();
      return null;
    }
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
