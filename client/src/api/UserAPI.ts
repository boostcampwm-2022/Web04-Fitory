import { toast } from "react-toastify";
import { success, error } from "@constants/message";
import HttpClient from "src/services/HttpClient";
import * as UserType from "src/types/user";
import { authStorage } from "../services/ClientStorage";

const UserAPI = {
  googleLogin: async ({ access_token }: UserType.LoginUserInfo) => {
    try {
      const path = "oauth/google/login";
      const response = await HttpClient.post(path, { access_token });
      return response.response as UserType.LoginResponse;
    } catch {
      toast.error(error.LOGIN);
      return null;
    }
  },

  join: async (userInfo: UserType.JoinUserInfo) => {
    try {
      const path = "oauth/google/register";
      const response = await HttpClient.post(path, userInfo);
      toast.success(success.JOIN);
      return response.response as UserType.JoinResponse;
    } catch {
      toast.error(error.JOIN);
      return null;
    }
  },

  logout: async () => {
    try {
      const path = "oauth/google/logout";
      await HttpClient.get(path);
    } catch {
      toast.error(error.LOGOUT);
    }
  },

  getUser: async (userId: UserType.UserId) => {
    try {
      const path = `users/get`;
      const response = await HttpClient.get(path, { userId });
      const { user } = response.response as { user: UserType.UserInfo };
      return user;
    } catch {
      toast.error(error.GET_USER);
      return null;
    }
  },

  checkExistUserName: async (userName: string) => {
    try {
      const path = "users/checkName";
      const response = await HttpClient.get(path, { userName });
      const { userExists } = response.response as { userExists: boolean };
      return userExists;
    } catch {
      toast.error(error.CHECK_USER_NAME);
      return null;
    }
  },

  getUserList: async () => {
    try {
      const path = "users/profile/list";
      const response = await HttpClient.get(path);
      const { userProfileList } = response.response as {
        userProfileList: UserType.SearchedUserInfo[];
      };
      return userProfileList;
    } catch {
      toast.error(error.GET_USER_LIST);
      return null;
    }
  },

  getRecommendUserList: async () => {
    try {
      const userId = authStorage.get();
      const path = "users/recommand/list";
      const response = await HttpClient.get(path, { userId });
      const { recommendWeight, recommendAge } = response.response as {
        recommendWeight: UserType.SearchedUserInfo[];
        recommendAge: UserType.SearchedUserInfo[];
      };
      return [recommendWeight, recommendAge];
    } catch {
      toast.error(error.GET_RECOMMAND_USER_LIST);
      return null;
    }
  },
};

export default UserAPI;
