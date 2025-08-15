"use client";

import { useState, type ReactNode } from "react";

import { UserContext } from "./UserContext";

import { DataType, EntriesType, RoleType } from "@/types/userContextType";
import { CardColorsType } from "@/types/CardColors";

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userId, setUserId] = useState<number>(1);
  const [username, setUsername] = useState<string>("");

  const [role, setRole] = useState<RoleType>("user");

  const [response, setResponse] = useState<string>("");

  const [entries, setEntries] = useState<EntriesType[]>([]);
  const [dataList, setDataList] = useState<DataType[]>([]);

  const [volume, setVolume] = useState<number>(100);
  const [colors, setColors] = useState<CardColorsType>({
         correct: "#1F7117",
         nearby: "#193495",
         distant: "#A51212",
  });

  function editContextValueInEntries(
    key: string,
    index: number,
    newValue: string | number
  ) {
    setEntries((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], [key]: newValue };
      return next;
    });
  }
  function removeContextEntryByIndex(index: number) {
    setEntries((prev) => {
      const next = [...prev];
      next.splice(index, 1);
      return next;
    });
  }
  function editContextDataListValue(
    key: string,
    index: number,
    newValue: string
  ) {
    setDataList((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], [key]: newValue };
      return next;
    });
  }
  function removeContextDataListValueByIndex(index: number) {
    setDataList((prev) => {
      const next = [...prev];
      next.splice(index, 1);
      return next;
    });
  }

  const value = {
    userId,
    setUserId,
    username,
    setUsername,
    role,
    setRole,
    response,
    setResponse,
    entries,
    setEntries,
    dataList,
    setDataList,
    volume,
    setVolume,
    colors,
    setColors,
    editContextDataListValue,
    editContextValueInEntries,
    removeContextDataListValueByIndex,
    removeContextEntryByIndex,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
