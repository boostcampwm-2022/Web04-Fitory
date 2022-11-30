import axios from "axios";
import { HttpSuccess, HttpFailed } from "src/types/http";

const axiosInstance = axios.create({
  baseURL: process.env.SERVER_BASE_URL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  // TODO: header에 Authorization 옵션 추가
  return config;
});

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
