import { Dispatch, SetStateAction, useMemo } from "react";
import { gameCreate } from "@/services/game/api-service";
import { DataInputType, EntriesType } from "@/types/userContextType";

interface Props {
  id: number;
  response: string;
  entries: EntriesType[];
  dataList: DataInputType[];
  setResponseError: Dispatch<SetStateAction<string>>;
  responseValidation: (value: string, setResponseError: Dispatch<SetStateAction<string>>) => boolean;
  nextScreen: (name: string) => void;
}

export default function useGameForm({
  id,
  response,
  entries,
  dataList,
  setResponseError,
  responseValidation,
  nextScreen,
 }: Props) {

  const listToBackend = useMemo(
    () => dataList.map((item) => item.value),
    [dataList] 
  );

  async function handleSubmit() {
    
    const validResponse = responseValidation(
      response,
      setResponseError
    );
    
    const validEntries = entries.length > 0;
    const validDataList = listToBackend.length > 0;
    const readyToSave = validResponse && validEntries && validDataList;

    const requestData = {
        id, 
        response,
        entries,
        dataList: listToBackend,
    }

    if (readyToSave) {
        await gameCreate({ requestData })
          .then(() => {
            console.log("deu certo kkkkk");
            nextScreen("editGameScreen");
          })
          .catch(() => {
            console.log("deu errado kkkkk");
          });
    } else {
      console.log("nao ta pronto para salvar :(");
    }
  }

  return {
    handleSubmit,
  };
}
