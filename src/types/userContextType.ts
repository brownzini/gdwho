import { Dispatch, SetStateAction } from "react";
import { CardColorsType } from "./CardColors";

export type RoleType = "admin" | "user";

export type EntriesType = {
  id: number;
  input: string;
  output: string;
  label: string | number;
};

export type EntryConstTYpes = "input" | "output" | "label";

export type DataType = {
  id: number;
  value: string;
};

export type DataInputType = {
  id: number;
  value: string;
  hasError?: boolean;
};

export type UserContextType = {
  userId: number;
  setUserId: (userId: number) => void;
  username: string;
  setUsername: (username: string) => void;
  response: string;
  setResponse: (response: string) => void;
  role: RoleType;
  setRole: (role: RoleType) => void;
  entries: EntriesType[];
  setEntries: (entries: EntriesType[]) => void;
  dataList: DataType[];
  setDataList: (dataList: DataType[]) => void;
  volume:number;
  setVolume: Dispatch<SetStateAction<number>>;
  editContextDataListValue: (
    key: string,
    index: number,
    newValue: string
  ) => void;
  editContextValueInEntries: (
    key: string,
    index: number,
    newValue: string | number
  ) => void;
  removeContextDataListValueByIndex: (index: number) => void;
  removeContextEntryByIndex(index: number): void;
  colors:CardColorsType;
  setColors: Dispatch<SetStateAction<CardColorsType>>;
};
