import HttpClient from "src/services/HttpClient";
import { LoginResponse } from "src/types/user";

const UserAPI = {
  googleLogin: async (accessToken: string) => {
    const path = process.env.POST_GOOGLE_OAUTH_API as string;
    const response = await HttpClient.post(path, { accessToken });

    return response.response as LoginResponse;
  },
};

export default UserAPI;
