import { useContext } from "react";
import { GameContext } from "./GameContext";

export const useGame = () => {
  const game = useContext(GameContext);
  if (!game) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return game;
};