"use client";

import { useState, type ReactNode } from "react";

import { UserContext } from "./UserContext";

import { DataType, EntriesType, RoleType } from "@/types/userContextType";

export const UserProvider = ({ children }: { children: ReactNode }) => {

  const [userId, setUserId] = useState<number>(0);
  const [username, setUsername] = useState<string>("");
  const [role, setRole] = useState<RoleType>("user");
  const [response, setResponse] = useState<string>("");
  const [entries, setEntries] = useState<EntriesType[]>([]);
  const [dataList, setDataList] = useState<DataType[]>([]);

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
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
