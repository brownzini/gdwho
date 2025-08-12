import { AxiosRequestConfig } from "axios";
import makeRequest from "../apiClient";
import { DataType, EntriesType } from "@/types/userContextType";

interface Props {
  requestData: {
    userId: number;
    response: string;
    entries: EntriesType[];
    dataList: DataType[];
  };
}

export async function gameCreate({ requestData }: Props) {
  const config: AxiosRequestConfig = {
    method: "POST",
    url: `/game/create`,
    data: requestData,
    headers: {
      "Content-Type": "application/json",
    },
  };
  return await makeRequest(config);
}
