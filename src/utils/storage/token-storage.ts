import { AUTH_TOKEN_STORAGE } from "@/constants/storageList";

export const setAuthToken = (token: string) =>
  token && localStorage.setItem(AUTH_TOKEN_STORAGE, token);
export const deleteAuthToken = () =>
  localStorage.removeItem(AUTH_TOKEN_STORAGE);

export const getBearerToken = () => {
  const token = localStorage.getItem(AUTH_TOKEN_STORAGE);
  const headers = {};
  if (token) {
    Object.assign(headers, {
      Authorization: `Bearer ${token}`,
    });
  }
  return headers;
};
