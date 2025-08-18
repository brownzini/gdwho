import { PREV_SCREEN_STORAGE } from "@/constants/storageList";

export const setPrevScreen = (screen:string) =>
  localStorage.setItem(PREV_SCREEN_STORAGE, screen);

export const getPrevScreen = () => {
   const storagedScreen = localStorage.getItem(PREV_SCREEN_STORAGE);
   return storagedScreen ?? "dashboard";
};

