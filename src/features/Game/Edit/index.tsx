"use client";

import editStyles from "./styles";
import EntriesArea from "../layouts/EntriesArea";
import DataListArea from "../layouts/DataListArea";
import useGameForm from "../hooks/useGameForm";

export default function EditFeature() {
  const {
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
    responseError,
    setResponseError,
    inputError,
    setInputError,
    outputError,
    setOutputError,
    labelError,
    setLabelError,
    dataList,
    dataListValueError,
    setDataListValueError,
    editDataListValue,
    removeDataListValueByIndex,
  } = useGameForm();
  return (
    <div data-name="edit-game-container" className={editStyles["wrapper"]}>
      <EntriesArea
        response={response}
        setResponse={setResponse}
        input={input}
        setInput={setInput}
        output={output}
        setOutput={setOutput}
        label={label}
        setLabel={setLabel}
        responseError={responseError}
        setResponseError={setResponseError}
        inputError={inputError}
        setInputError={setInputError}
        outputError={outputError}
        setOutputError={setOutputError}
        labelError={labelError}
        setLabelError={setLabelError}
      />
      <DataListArea
        value={dataListValue}
        setValue={setDataListValue}
        dataList={dataList}
        dataListValueError={dataListValueError}
        setDataListValueError={setDataListValueError}
        editValue={editDataListValue}
        removeValueByIndex={removeDataListValueByIndex}
      />
    </div>
  );
}
