import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { StatusCode } from "@constants/enums";
import { HttpSuccess, HttpFailed } from "src/types/http";
import Exception from "./Exception";
import { authStorage } from "./ClientStorage";

const axiosInstance = axios.create({
  baseURL: process.env.SERVER_BASE_URL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
  if (authStorage.has()) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const headers = config.headers as any;
    headers.user_id = authStorage.get();
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if ((error.response?.data as HttpFailed).statusCode === StatusCode.UNAUTHORIZED) {
      Exception.UserNotFound();
      return;
    }
    throw error;
  },
);

const HttpClient = {
  get: async (path: string, params = {}, headers = {}): Promise<HttpSuccess | HttpFailed> => {
    const response = await axiosInstance.get(path, { params, headers });
    return response.data;
  },

  post: async (path: string, body: unknown, headers = {}): Promise<HttpSuccess | HttpFailed> => {
    const response = await axiosInstance.post(path, body, { headers });
    return response.data;
  },

  put: async (path: string, body: unknown, headers = {}): Promise<HttpSuccess | HttpFailed> => {
    const response = await axiosInstance.put(path, body, { headers });
    return response.data;
  },

  delete: async (path: string, headers = {}): Promise<HttpSuccess | HttpFailed> => {
    const response = await axiosInstance.delete(path, { headers });
    return response.data;
  },
};

export default HttpClient;
