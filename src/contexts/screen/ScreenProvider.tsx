"use client";

import { useState, useCallback, useMemo, type ReactNode } from "react";

import { ScreenContext } from "./ScreenContext";
import { deleteAuthToken } from "@/utils/storage/token-storage";

import { useRouter } from "next/navigation";
import {
  getPrevScreen,
  setPrevScreen,
} from "@/utils/storage/prevScreen-storage";

const backScreenMap: Record<string, string> = {
  gameSelectScreen: "dashboard",
  createGameScreen: "dashboard",
  editGameScreen: "dashboard",
  inGameScreen: "gameSelectScreen",
  historyScreen: "dashboard",
  configurationScreen: "dashboard",
};

export const ScreenProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  const [screenName, setScreenName] = useState<string>("pulseScreen");

  const nextScreen = useCallback(
    (name: string) => {
      if (name === "configurationScreen") setPrevScreen(screenName);
      if (name !== screenName) setScreenName(name);
    },
    [screenName]
  );

  const backScreen = useCallback(() => {
    const defaultPrevScreen = backScreenMap[screenName ?? "dashboard"];
    const prevScreen =
      screenName === "configurationScreen"
        ? getPrevScreen()
        : defaultPrevScreen;
    setScreenName(prevScreen);
  }, [screenName]);

  const logoutScreen = useCallback(() => {
    deleteAuthToken();
    setScreenName("pulseScreen");
    router.push("/login");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenName]);

  const value = useMemo(
    () => ({
      screenName,
      setScreenName,
      backScreen,
      nextScreen,
      logoutScreen,
    }),
    [screenName, backScreen, nextScreen, logoutScreen]
  );

  return (
    <ScreenContext.Provider value={value}>{children}</ScreenContext.Provider>
  );
};
