import { useState } from "react";
import {
  invalidDataListValueField,
  invalidInputField,
  invalidLabelField,
  invalidOutputField,
  invalidResponseField,
} from "@/services/game/businessRuleValidations-service";
import { gameCreate } from "@/services/game/api-service";
import { DataInputType, EntriesType } from "@/types/userContextType";

export default function useGameForm() {
  const [response, setResponse] = useState<string>("");

  const [entries, setEntries] = useState<EntriesType[]>([]);
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [label, setLabel] = useState<string>("100");

  const [dataList, setDataList] = useState<DataInputType[]>([]);
  const [dataListValue, setDataListValue] = useState<string>("");
  const [dataListValueError, setDataListValueError] = useState<string>("");

  const [responseError, setResponseError] = useState<string>("");
  const [inputError, setInputError] = useState<string>("");
  const [outputError, setOutputError] = useState<string>("");
  const [labelError, setLabelError] = useState<string>("");

  function responseValidation() {
    const notValidResponse = invalidResponseField(true, response);
    if (notValidResponse) {
      setResponseError(notValidResponse);
    }
    return !notValidResponse;
  }

  function entriesValidation() {
    const notValidInput = invalidInputField(true, input);
    if (notValidInput) setInputError(notValidInput);

    const notValidOutput = invalidOutputField(true, output);
    if (notValidOutput) setOutputError(notValidOutput);

    const normalizedLabel = label ? Math.abs(parseInt(label)) : 0;
    const notValidLabel = invalidLabelField(true, normalizedLabel);
    if (notValidLabel) setLabelError(notValidLabel);

    return !notValidInput && !notValidOutput && !notValidLabel;
  }

  function addEntryInList() {
    const id = entries.length + 1;
    const normalizedLabel = label ? Math.abs(parseInt(label)) : 0;
    const entrie = {
      id,
      input,
      output,
      label: normalizedLabel,
    };
    const validFeilds = entriesValidation();
    if (validFeilds) {
      setEntries((prevEntries) => [...prevEntries, entrie]);
      resetFields("entries");
    }
    return;
  }

  function dataListValidation(value: string) {
    const notValidDataListValue = invalidDataListValueField(true, value);
    if (notValidDataListValue) {
      setDataListValueError(notValidDataListValue);
    }
    return !notValidDataListValue;
  }

  function addDataInList() {
    const id = dataList.length + 1;
    const data = {
      id,
      value: dataListValue,
    };
    const validFeilds = dataListValidation(dataListValue);
    if (validFeilds) {
      setDataList((prevDataList) => [...prevDataList, data]);
      resetFields("dataList");
    }
    return;
  }

  function editDataListValue(key: string, index: number, newValue: string) {
    setDataList((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], [key]: newValue };
      return next;
    });
  }

  function removeDataListValueByIndex(index: number) {
    setDataList((prev) => {
      const next = [...prev];
      next.splice(index, 1);
      return next;
    });
  }

  function resetFields(type: string) {
    switch (type) {
      case "entries":
        setInput("");
        setOutput("");
        setLabel("100");
        return;
      case "dataList":
        setDataListValue("");
        return;
      default:
        setResponse("");
        return;
    }
  }

  async function handleSubmit() {
    const requestData = {
      userId: 0,
      response: "",
      entries: [],
      dataList: [],
    };
    const result = await gameCreate({ requestData });
    console.log(result);
  }

  return {
    response,
    setResponse,
    input,
    setInput,
    output,
    setOutput,
    label,
    setLabel,
    dataListValue,
    setDataListValue,
    handleSubmit,
    responseError,
    setResponseError,
    inputError,
    setInputError,
    outputError,
    setOutputError,
    labelError,
    setLabelError,
    dataList,
    setDataList,
    addDataInList,
    dataListValueError,
    setDataListValueError,
    entries,
    setEntries,
    addEntryInList,
    editDataListValue,
    removeDataListValueByIndex,
  };
}
