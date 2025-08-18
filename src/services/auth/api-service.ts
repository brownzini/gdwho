import { AxiosRequestConfig } from "axios";
import makeRequest from "../apiClient";
import { AUTH_TOKEN_STORAGE } from "@/constants/storageList";

interface AuthProps {
  actiontype: "login" | "register";
  username:string | null;
  password:string | null;
}

export async function auth({ actiontype, username, password }:AuthProps) {
  const token = localStorage.getItem(AUTH_TOKEN_STORAGE);
  const headers = {};
  if(token) {
    Object.assign(headers, {
         Authorization: `Bearer ${token}`,
    })
  }
  const config: AxiosRequestConfig = {
    method: "POST",
    url: `/auth/${actiontype}`,
    data: { username, password },
    headers,
  };
  return await makeRequest(config);
}
