import HttpClient from "src/services/HttpClient";
import Exception from "src/services/Exception";
import { authStorage } from "src/services/ClientStorage";
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

  getUser: async () => {
    try {
      const userId = authStorage.get();

      if (!userId) {
        throw new Error();
      }

      const path = `users/get?id=${userId}`;
      const response = await HttpClient.get(path);
      const { user } = response.response as { user: UserType.UserInfo };

      return user;
    } catch {
      Exception.UserNotFound();
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
