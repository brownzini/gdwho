import { Dispatch, SetStateAction } from "react";

export type MessageType = "success" | "warning" | "error";

export type MessageBoxContextType = {
  isOpenMB: boolean;
  setIsOpenMB: Dispatch<SetStateAction<boolean>>;
  dispatchMessageBox: (typeMessage:MessageType, title: string | null, subTitle: string | null) => void;
  closeMessageBox: () => void;
  title: string | null;
  subTitle: string | null;
  messageType:MessageType;
};
