"use client";

import { useState, type ReactNode } from "react";

import { UserContext } from "./UserContext";

import { DataType, EntriesType, RoleType } from "@/types/userContextType";

export const UserProvider = ({ children }: { children: ReactNode }) => {

  const [userId, setUserId] = useState<number>(0);
  const [username, setUsername] = useState<string>("");

  const [role, setRole] = useState<RoleType>("user");

  const [response, setResponse] = useState<string>("testando");

  const [entries, setEntries] = useState<EntriesType[]>([
    { id: 1, input: "gosta de ratos", output: "tem o marquito", label: 1 },
    { id: 2, input: "gosta de gatos", output: "tem o jones", label: 1 },
  ]);
  const [dataList, setDataList] = useState<DataType[]>([
    {
      id: 1,
      value: "programa de tv",
    },
    {
      id: 2,
      value: "novela de tv",
    },
  ]);

  function editContextValueInEntries(key: string, index: number, newValue: string | number) {
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
  function editContextDataListValue(key: string, index: number, newValue: string) {
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
    editContextDataListValue,
    editContextValueInEntries,
    removeContextDataListValueByIndex,
    removeContextEntryByIndex,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
