"use client";

import { useRef, useState, type ReactNode } from "react";
import { MessageBoxContext } from "./MessageBoxContext";
import { MessageType } from "@/types/messageBoxContextType";
import MESSAGE_BOX from "@/constants/messageBox";

export const MessageBoxProvider = ({ children }: { children: ReactNode }) => {
  const [isOpenMB, setIsOpenMB] = useState<boolean>(false);
  const [title, setTitle] = useState<string | null>("");
  const [subTitle, setSubTitle] = useState<string | null>("");
  const [messageType, setMessageType] = useState<MessageType>("success");

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const dispatchMessageBox = (
    typeMessage: MessageType,
    title: string | null,
    subTitle: string | null
  ) => {

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setIsOpenMB(false);
    setTimeout(() => {
      setTitle(title);
      setSubTitle(subTitle);
      setMessageType(typeMessage);
      setIsOpenMB(true);

      timeoutRef.current = setTimeout(() => {
        setIsOpenMB(false);
        timeoutRef.current = null;
      }, MESSAGE_BOX.TIMER);
    }, 0); 
    
  };

  const closeMessageBox = () => {
    setIsOpenMB(false);
    setTitle(null);
    setSubTitle(null);
  };

  const value = {
    isOpenMB,
    setIsOpenMB,
    dispatchMessageBox,
    closeMessageBox,
    title,
    subTitle,
    messageType,
  };

  return (
    <MessageBoxContext.Provider value={value}>
      {children}
    </MessageBoxContext.Provider>
  );
};
