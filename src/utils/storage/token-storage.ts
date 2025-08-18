import { AUTH_TOKEN_STORAGE } from "@/constants/storageList";

export const getAuthToken = () => localStorage.getItem(AUTH_TOKEN_STORAGE);
export const setAuthToken = (token: string) => (token) && localStorage.setItem(AUTH_TOKEN_STORAGE, token);
export const deleteAuthToken = () => localStorage.removeItem(AUTH_TOKEN_STORAGE);