import { AxiosRequestConfig } from "axios";
import makeRequest from "../apiClient";
import { EntriesType } from "@/types/userContextType";
import { JsonPatchOp } from "@/types/apiType";
import { getBearerToken } from "@/utils/storage/token-storage";

interface GameCreateProps {
  requestData: {
    id: number;
    response: string;
    entries: EntriesType[];
    dataList: string[];
  };
}

interface GameUpdateEntryProps {
  id: number;
  requestData: JsonPatchOp[];
}

export async function findAllGames() {
  const headers = getBearerToken();
  const config: AxiosRequestConfig = {
    method: "GET",
    url: "/game/search/total",
    headers,
  };
  return await makeRequest(config);
}
export async function gameCreate({ requestData }: GameCreateProps) {
  const headers = getBearerToken();
  const config: AxiosRequestConfig = {
    method: "POST",
    url: `/game/create`,
    data: requestData,
    headers,
  };
  return await makeRequest(config);
}
export async function gameDelete() {
  const headers = getBearerToken();
  const config: AxiosRequestConfig = {
    method: "DELETE",
    url: `/game/delete`,
    headers,
  };
  return await makeRequest(config);
}
export async function sendGuess(id: number, input: string) {
  const headers = getBearerToken();
  const config: AxiosRequestConfig = {
    method: "GET",
    url: `/game/${id}/guess?input=${input}`,
    headers,
  };
  return await makeRequest(config);
}
export async function updateResponse(response: string) {
  const headers = getBearerToken();
  const config: AxiosRequestConfig = {
    method: "PUT",
    url: `/game/update/response`,
    data: { response },
    headers,
  };
  return await makeRequest(config);
}
export async function updateData(id: number, value: string) {
  const headers = getBearerToken();
  const config: AxiosRequestConfig = {
    method: "PUT",
    url: `/game/update/data/${id}`,
    data: { value },
    headers,
  };
  return await makeRequest(config);
}
export async function deleteData(id: number) {
  const headers = getBearerToken();
  const config: AxiosRequestConfig = {
    method: "DELETE",
    url: `/game/delete/data/${id}`,
    headers,
  };
  return await makeRequest(config);
}
export async function updateEntry({ id, requestData }: GameUpdateEntryProps) {
  const headers = getBearerToken(true);
  const config: AxiosRequestConfig = {
    method: "PATCH",
    url: `/game/update/entrie/${id}`,
    data: requestData,
    headers,
  };
  return await makeRequest(config);
}
export async function deleteEntry(id: number) {
  const headers = getBearerToken();
  const config: AxiosRequestConfig = {
    method: "DELETE",
    url: `/game/delete/entrie/${id}`,
    headers,
  };
  return await makeRequest(config);
}
