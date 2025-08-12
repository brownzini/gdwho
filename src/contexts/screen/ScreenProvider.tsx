"use client";

import {
  useState,
  useCallback,
  useMemo,
  type ReactNode,
  useEffect,
} from "react";

import { ScreenContext } from "./ScreenContext";
import SHOULD_NOT_BE_CACHABLED_LIST from "@/constants/notCachabledList";

const backScreenMap: Record<string, string> = {
      gameSelectScreen: "dashboard",
      createGameScreen: "dashboard",
      editGameScreen: "dashboard",
      inGameScreen: "gameSelectScreen",
      historyScreen: "dashboard",
      configurationScreen: "dashboard",
};

export const ScreenProvider = ({ children }: { children: ReactNode }) => {
  const [screenName, setScreenName] = useState<string>("dashboard");

  useEffect(() => {
    const cachedScreenName = localStorage.getItem("cached_screen");
    setScreenName(cachedScreenName ?? "dashboard");
  }, []);

  const nextScreen = useCallback(
    (name: string) => {
      if (name !== screenName) {
          setScreenCache(screenName);
          setScreenName(name);
      }
    },
    [screenName]
  );

  const backScreen = useCallback(() => {
        const cachedScreenName  = localStorage.getItem("cached_screen");
        const previousScreenName = backScreenMap[screenName ?? "dashboard"];
        const notChangeCachedScreenName = (cachedScreenName && cachedScreenName !== screenName);
        const currentScreenName = notChangeCachedScreenName ? cachedScreenName : previousScreenName; 
        setScreenName(currentScreenName);
  }, [screenName]);

  const setScreenCache = (cachedScreenName: string | null) => {
    if (cachedScreenName)
      if(!SHOULD_NOT_BE_CACHABLED_LIST.has(cachedScreenName)) {
         localStorage.setItem("cached_screen", cachedScreenName);
      }
  };

  const value = useMemo(
    () => ({
      screenName,
      setScreenName,
      backScreen,
      nextScreen,
    }),
    [screenName, backScreen, nextScreen]
  );

  return (
    <ScreenContext.Provider value={value}>{children}</ScreenContext.Provider>
  );
};
