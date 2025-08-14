import { Dispatch, SetStateAction, useMemo } from "react";
import { gameCreate } from "@/services/game/api-service";
import { DataInputType, EntriesType } from "@/types/userContextType";
import { useUser } from "@/contexts/user/useUser";

interface Props {
  id: number;
  response: string;
  entries: EntriesType[];
  dataList: DataInputType[];
  setResponseError: Dispatch<SetStateAction<string>>;
  responseValidation: (
    value: string,
    setResponseError: Dispatch<SetStateAction<string>>
  ) => boolean;
  nextScreen: (name: string) => void;
  setEntries: Dispatch<SetStateAction<EntriesType[]>>;
  setDataList: Dispatch<SetStateAction<DataInputType[]>>;
}

export default function useGameCreateForm({
  id,
  response,
  entries,
  dataList,
  setResponseError,
  responseValidation,
  nextScreen,
}: Props) {

  const {
    setResponse:userSetResponse, 
    setEntries:userSetEntries, 
    setDataList:userSetDataList 
  } = useUser();

  const listToBackend = useMemo(
    () => dataList.map((item) => item.value),
    [dataList]
  );

  async function saveSubmit() {
    const validResponse = responseValidation(response, setResponseError);

    const validEntries = entries.length > 0;
    const validDataList = listToBackend.length > 0;
    const readyToSave = validResponse && validEntries && validDataList;

    const requestData = {
      id,
      response,
      entries,
      dataList: listToBackend,
    };

    if (readyToSave) {
      await gameCreate({ requestData })
        .then(() => {
          updateContextStates();
          nextScreen("editGameScreen");
        })
        .catch(() => {
          console.log("deu errado kkkkk");
        });
    } else {
      console.log("nao ta pronto para salvar :(");
    }
  }

  function updateContextStates() {
        userSetResponse(response);
        userSetEntries(entries);
        userSetDataList(dataList);
  }

  return {
    saveSubmit
  };
}
