import { useState } from "react";
import { DataInputType } from "@/types/userContextType";
import { invalidDataListValueField } from "@/services/game/businessRuleValidations-service";

export default function useDataList() {

  const [dataList, setDataList] = useState<DataInputType[]>([]);
  const [dataListValue, setDataListValue] = useState<string>("");
  const [dataListValueError, setDataListValueError] = useState<string>("");

  function resetFields() {
    setDataListValue("");
  }

  function dataListValidationFields(value: string) {
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
    const validFeilds = dataListValidationFields(dataListValue);
    if (validFeilds) {
      setDataList((prevDataList) => [...prevDataList, data]);
      resetFields();
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

  return {
    dataList,
    dataListValue,
    setDataListValue,
    dataListValueError,
    setDataListValueError,
    addDataInList,
    editDataListValue,
    removeDataListValueByIndex,
  };
}
