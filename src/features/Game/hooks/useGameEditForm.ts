import { Dispatch, SetStateAction, useEffect } from "react";
import {
  DataInputType,
  DataType,
  EntriesType,
  EntryConstTYpes,
} from "@/types/userContextType";
import { useUser } from "@/contexts/user/useUser";
import {
  deleteData,
  deleteEntry,
  updateData,
  updateEntry,
  updateResponse,
} from "@/services/game/api-service";
import { useMessageBox } from "@/contexts/messageBox/useMessageBox";

type OperationType = "edit" | "delete";

interface Props {
  response: string;
  input: string;
  output: string;
  label: string | number;
  entries: EntriesType[];
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
  editDataListValue: (key: string, index: number, newValue: string) => void;
  setInput: Dispatch<SetStateAction<string>>;
  setOutput: Dispatch<SetStateAction<string>>;
  setLabel: Dispatch<SetStateAction<string | number>>;
  editValueInEntries: (
    key: EntryConstTYpes,
    index: number,
    newValue: string | number
  ) => void;
  removeEntryByIndex: (index: number) => void;
  removeDataListValueByIndex: (index: number) => void;
}

export default function useGameEditForm({
  response,
  input,
  output,
  label,
  entries,
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
  editDataListValue,
  setInput,
  setOutput,
  setLabel,
  editValueInEntries,
  removeEntryByIndex,
  removeDataListValueByIndex,
}: Props) {
  const {
    response: userResponse,
    setResponse: userSetResponse,
    entries: userEntries,
    dataList: userDatalist,
    editContextValueInEntries,
    removeContextEntryByIndex,
    editContextDataListValue,
    removeContextDataListValueByIndex,
  } = useUser();

  const { dispatchMessageBox } = useMessageBox();

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
          await sendUpdatedResponseToApi();
      } else {
          returnDefaultResponse();
      }
    }
  }
  async function sendUpdatedResponseToApi() {
    await updateResponse(response)
      .then(() => {
        userSetResponse(response);
      })
      .catch(() => {
       dispatchMessageBox("error", "ALTERAÇÃO FALHOU", "Não foi possivel atualizar o campo");
      });
    return;
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
        await sendUpdatedEntryToApi(key);
      } else {
        returnDefaultEntry(key);
      }
    }
  }
  async function sendUpdatedEntryToApi(key: EntryConstTYpes) {
    const baseEntry = entries[entrySelectedIndex];
    const id = baseEntry.id;
    const value = {
      input: input,
      output: output,
      label: Number(label),
    };

    const requestData = [
      {
        op: "replace",
        path: `/${key}`,
        value: value[key],
      },
    ];

    await updateEntry({ id, requestData })
      .then(() => {
        updateEntryState("edit", key, value[key]);
        dispatchMessageBox("success", "ENTRADA ALTERADA", "A operação foi realizada com sucesso !!!");
      })
      .catch(() => {
        dispatchMessageBox("error", "ALTERAÇÃO FALHOU", "Não foi possivel atualizar o campo");
      });
    return;
  }
  async function deleteEntrySubmit(id: number, index: number) {
    await sendDeletedEntryToApi(id, index);
  }
  async function sendDeletedEntryToApi(id: number, index: number) {
    await deleteEntry(id)
      .then(() => {
        updateEntryState("delete", "input", index);
        dispatchMessageBox("success", "CAMPO DELETEADO", "Entrada removida com sucesso !!!");
      })
      .catch(() => {
         dispatchMessageBox("error", "ALTERAÇÃO FALHOU", "Não foi possivel atualizar o campo");
      });
    return;
  }
  async function editDataListSubmit() {
    const userData = userDatalist[dataSelectedIndex] ?? [];
    const hasChanged = hasChangedValueValidation(userData.value);
    if (hasChanged) {
      const id = dataList[dataSelectedIndex].id;
      const value = dataList[dataSelectedIndex].value;
      const readyToSave = dataListValidationFields(value);
      if (readyToSave) {
        await sendUpdatedDataToApi(id, value);
      } else {
        returnDefaultValue();
      }
    }
  }
  async function sendUpdatedDataToApi(id: number, value: string) {
    await updateData(id, value)
      .then(() => {
        updateDataListState(dataSelectedIndex, value);
        dispatchMessageBox("success", "CAMPO ALTERADO", "A alteração foi concluida com sucesso !!");
      })
      .catch(() => {
         dispatchMessageBox("error", "ALTERAÇÃO FALHOU", "Não foi possivel atualizar o campo");
      });
    return;
  }
  async function deleteDataListSubmit(id: number, index: number) {
    await sendDeletedDataToApi(id, index);
  }
  async function sendDeletedDataToApi(id: number, index: number) {
    await deleteData(id)
      .then(() => {
        removeDataListValueByIndex(index);
        removeContextDataListValueByIndex(index);
        dispatchMessageBox("success", "CAMPO DELETEADO", "Dica removida com sucesso !!!");
      })
      .catch(() => {
        returnDefaultValue();
      });
    return;
  }
  function updateEntryState(
    operation: OperationType,
    key: EntryConstTYpes,
    value: string | number
  ) {
    if (operation === "edit") {
      editValueInEntries(key, entrySelectedIndex, value);
      editContextValueInEntries(key, entrySelectedIndex, value);
    } else {
      const index = Number(value);
      removeEntryByIndex(index);
      removeContextEntryByIndex(index);
    }
  }
  function updateDataListState(index: number, newValue: string) {
    editContextDataListValue("value", index, newValue);
  }
  function returnDefaultResponse() {
    setResponse(userResponse);
  }
  function returnDefaultEntry(key: EntryConstTYpes) {
    const userEntry = userEntries[entrySelectedIndex] ?? [];
    if (key === "input") setInput(userEntry.input);
    if (key === "output") setOutput(userEntry.output);
    if (key === "label") setLabel(userEntry.label);
  }
  function returnDefaultValue() {
    const userData = userDatalist[dataSelectedIndex] ?? [];
    editDataListValue("value", dataSelectedIndex, userData.value);
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
    deleteDataListSubmit,
    deleteEntrySubmit,
  };
}
