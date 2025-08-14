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
  ]);

  const [dataList, setDataList] = useState<DataType[]>([
    {
      id: 1,
      value: "programa de tv",
    },
  ]);

  function editDataListValue(key: string, index: number, newValue: string) {
    setDataList((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], [key]: newValue };
      return next;
    });
  }

  function removeDataListValueByIndex(index: number) {
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
    editDataListValue,
    removeDataListValueByIndex,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
