import axios, { AxiosRequestConfig } from "axios";

export default function makeRequest(config: AxiosRequestConfig) {
  return axios({ ...config, baseURL: process.env.NEXT_PUBLIC_BASE_URL });
}