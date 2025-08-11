import { useContext } from "react";
import { ScreenContext } from "./ScreenContext";

export const useScreen = () => {
  const screen = useContext(ScreenContext);
  if (!screen) {
    throw new Error("useScreen must be used within a ScreenProvider");
  }
  return screen;
};