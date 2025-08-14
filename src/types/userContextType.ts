export type RoleType = "admin" | "user";

export type EntriesType = {
     id:number;
     input:string;
     output:string;
     label: string | number;
}

export type EntryConstTYpes = "input" | "output" | "label" ;

export type DataType = {
     id:number;
     value:string;
}

export type DataInputType = {
     id:number;
     value:string;
     hasError?:boolean;
}

export type UserContextType = {
  userId:number;
  setUserId: (userId: number) => void;
  username: string;
  setUsername: (username: string) => void;
  response:string;
  setResponse: (response: string) => void;
  role: RoleType;
  setRole: (role: RoleType) => void;
  entries: EntriesType[];
  setEntries: (entries: EntriesType[]) => void;
  dataList: DataType[];
  setDataList: (dataList: DataType[]) => void;
  editDataListValue: (key: string, index: number, newValue: string) => void;
  removeDataListValueByIndex: (index: number) => void;
};