import { Dispatch, SetStateAction, useMemo } from "react";
import { gameCreate } from "@/services/game/api-service";
import { DataInputType, EntriesType } from "@/types/userContextType";
import { useUser } from "@/contexts/user/useUser";
import { useMessageBox } from "@/contexts/messageBox/useMessageBox";
import { useHistory } from "@/contexts/history/useHistory";

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
    setResponse: userSetResponse,
    setEntries: userSetEntries,
    setDataList: userSetDataList,
  } = useUser();

  const { addHistoryItem } = useHistory();
  const { dispatchMessageBox } = useMessageBox();

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
          dispatchMessageBox(
            "success",
            "JOGO CRIADO:",
            "Seu jogo foi criado com sucesso"
          );
          addHistoryItem({
            type: "criou",
            field: "um jogo",
          });
          updateContextStates();
          nextScreen("dashboard");
        })
        .catch(() => {
          dispatchMessageBox(
            "error",
            "FALHA NA CRIAÇÃO:",
            "Não foi possivel criar seu modelo"
          );
        });
    } else {
      dispatchMessageBox(
        "error",
        "NÃO PODE SALVAR:",
        "Você não pode salvar até todos os campos estarem completos"
      );
    }
  }

  function updateContextStates() {
    userSetResponse(response);
    userSetEntries(entries);
    userSetDataList(dataList);
  }

  return {
    saveSubmit,
  };
}
