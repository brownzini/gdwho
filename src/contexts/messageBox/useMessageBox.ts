import { useContext } from "react";
import { MessageBoxContext } from "./MessageBoxContext";

export const useMessageBox = () => {
  const messageBox = useContext(MessageBoxContext);
  if (!messageBox) {
    throw new Error("useMessageBox must be used within a MessageBoxProvider");
  }
  return messageBox;
};