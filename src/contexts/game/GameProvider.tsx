"use client";

import { useState, type ReactNode } from "react";

import { GameContext } from "./GameContext";
import { GameListType } from "@/types/GameContextType";

export const GameProvider = ({ children }: { children: ReactNode }) => {
  
  const [listOfGameIDs, setListOfGameIDs] = useState<GameListType[]>([ { id:1, username:"dssd" } ]);
  const [selectedGameIndex, setSelectedGameIndex] = useState<number | null>(null);

  const value = {
    listOfGameIDs,
    setListOfGameIDs,
    selectedGameIndex,
    setSelectedGameIndex,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
