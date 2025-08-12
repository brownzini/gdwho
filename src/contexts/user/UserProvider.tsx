"use client";

import { useState, type ReactNode } from "react";

import { DataType, EntriesType, RoleType } from "@/types/userContextType";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [username, setUsername] = useState<string>("");
  const [role, setRole] = useState<RoleType>("user");
  const [response, setResponse] = useState<string>("");
  const [entries, setEntries] = useState<EntriesType[]>([]);
  const [dataList, setDataList] = useState<DataType[]>([]);

  const addEntry = (newEntry: EntriesType) => {
    setEntries((prevEntries) => [...prevEntries, newEntry]);
  };

  const addValue = (newValue: DataType) => {
    setDataList((prevEntries) => [...prevEntries, newValue]);
  };

  const value = {
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
    addEntry,
    addValue,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
