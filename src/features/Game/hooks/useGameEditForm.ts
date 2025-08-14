import { Dispatch, SetStateAction, useEffect } from "react";
import {
  DataInputType,
  DataType,
  EntriesType,
  EntryConstTYpes,
} from "@/types/userContextType";
import { useUser } from "@/contexts/user/useUser";

interface Props {
  response: string;
  input: string;
  output: string;
  label: string | number;
  dataList: DataType[];
  entrySelectedIndex: number;
  setEntries: Dispatch<SetStateAction<EntriesType[]>>;
  setDataList: Dispatch<SetStateAction<DataInputType[]>>;
  setResponse: Dispatch<SetStateAction<string>>;
  setResponseError: Dispatch<SetStateAction<string>>;
  entryValidationFields: () => boolean;
  responseValidation: (
    value: string,
    setResponseError: Dispatch<SetStateAction<string>>
  ) => boolean;
  dataListValidationFields(value: string): boolean;
  dataSelectedIndex: number;
}

export default function useGameEditForm({
  response,
  input,
  output,
  label,
  dataList,
  entrySelectedIndex,
  setEntries,
  setDataList,
  setResponse,
  setResponseError,
  responseValidation,
  entryValidationFields,
  dataListValidationFields,
  dataSelectedIndex,
}: Props) {
  const {
    response: userResponse,
    entries: userEntries,
    dataList: userDatalist,
  } = useUser();

  function hasChangedResponseValidation(userResponse: string) {
    return userResponse !== response;
  }

  function hasChangedInputValidation(userInput: string) {
    return userInput !== input;
  }

  function hasChangedOutputValidation(userOutput: string) {
    return userOutput !== output;
  }

  function hasChangedLabelValidation(userLabel: string | number) {
    return Number(userLabel) !== Number(label);
  }

  function hasChangedValueValidation(userValue: string) {
    const dataValue = dataList[dataSelectedIndex].value;
    return userValue !== dataValue;
  }

  async function editResponseSubmit() {
    const hasChanged = hasChangedResponseValidation(userResponse);
    if (hasChanged) {
      const readyToSave = responseValidation(response, setResponseError);
      if (readyToSave) {
        console.log("alterado kkkk");
      } else {
        console.log("não pode salvar vazio kkkkkk");
      }
    } else {
      console.log("nao mudou nada kkkkkk");
    }
  }

  async function editEntriesSubmit(key: EntryConstTYpes) {

    const userEntry = userEntries[entrySelectedIndex] ?? [];
    const hasChanged = {
      input: hasChangedInputValidation(userEntry.input),
      output: hasChangedOutputValidation(userEntry.output),
      label: hasChangedLabelValidation(userEntry.label),
    };

    if (hasChanged[key]) {
      const readyToSave = entryValidationFields();
      if (readyToSave) {
        console.log("alterado kkkk");
      } else {
        console.log("não pode salvar vazio kkkkkk");
      }
    } else {
      console.log("nao mudou nada kkkkkk");
    }
  }

  async function editDataListSubmit() {
    const userData = userDatalist[dataSelectedIndex] ?? [];
    const hasChanged = hasChangedValueValidation(userData.value);
  
    if (hasChanged) {
      const value = dataList[dataSelectedIndex].value;
      const readyToSave = dataListValidationFields(value);
      if (readyToSave) {
        console.log("alterado kkkk");
      } else {
        console.log("não pode salvar vazio kkkkkk");
      }
    } else {
      console.log("nao mudou nada kkkkkk");
    }
  }

  useEffect(() => {
    const hasNotEmptyValues =
      userEntries.length > 0 && userDatalist.length > 0 && userResponse !== "";
    if (hasNotEmptyValues) {
        setEntries(userEntries);
        setDataList(userDatalist);
        setResponse(userResponse);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    editEntriesSubmit,
    editResponseSubmit,
    editDataListSubmit,
  };
}
