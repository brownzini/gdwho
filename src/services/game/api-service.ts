import { AxiosRequestConfig } from "axios";
import makeRequest from "../apiClient";
import { EntriesType } from "@/types/userContextType";
import { JsonPatchOp } from "@/types/apiType";

interface GameCreateProps {
  requestData: {
    id: number;
    response: string;
    entries: EntriesType[];
    dataList: string[];
  };
}

interface GameUpdateEntryProps {
  id:number;
  requestData: JsonPatchOp[];
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
export async function sendGuess(id:number, input:string) {
  const token = localStorage.getItem("token");
  const config: AxiosRequestConfig = {
    method: "GET",
    url: `/game/${id}/guess?input="${input}"`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return await makeRequest(config);
}
export async function updateResponse(response:string) {
  const token = localStorage.getItem("token");
  const config: AxiosRequestConfig = {
    method: "PUT",
    url: `/game/update/response`,
    data: { response },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return await makeRequest(config);
}
export async function updateData(id:number, value:string ) {
  const token = localStorage.getItem("token");
  const config: AxiosRequestConfig = {
    method: "PUT",
    url: `/game/update/data/${id}`,
    data: { value },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return await makeRequest(config);
}
export async function deleteData(id:number) {
  const token = localStorage.getItem("token");
  const config: AxiosRequestConfig = {
    method: "DELETE",
    url: `/game/delete/data/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return await makeRequest(config);
}
export async function updateEntry({ id, requestData }: GameUpdateEntryProps) {
  const token = localStorage.getItem("token");
  const config: AxiosRequestConfig = {
    method: "PATCH",
    url: `/game/update/entrie/${id}`,
    data: requestData,
    headers: {
      'Content-Type': 'application/json-patch+json',
      Authorization: `Bearer ${token}`,
    },
  };
  return await makeRequest(config);
}
export async function deleteEntry(id:number) {
  const token = localStorage.getItem("token");
  const config: AxiosRequestConfig = {
    method: "DELETE",
    url: `/game/delete/entrie/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return await makeRequest(config);
}

