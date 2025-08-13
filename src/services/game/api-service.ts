import { AxiosRequestConfig } from "axios";
import makeRequest from "../apiClient";
import { EntriesType } from "@/types/userContextType";

interface GameCreateProps {
  requestData: {
    id: number;
    response: string;
    entries: EntriesType[];
    dataList: string[];
  };
}

export async function gameCreate({ requestData }: GameCreateProps) {
  const token = localStorage.getItem("token");
  const config: AxiosRequestConfig = {
    method: "POST",
    url: `/game/create`,
    data: requestData,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return await makeRequest(config);
}
