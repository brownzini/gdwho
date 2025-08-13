"use client";

import DataListArea from "../layouts/DataListArea";
import EntriesArea from "../layouts/EntriesArea";
import createStyles from "./styles";
import useGameForm from "../hooks/useGameForm";

export default function CreateFeature() {
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
    addEntryInList,
    addDataInList,
  } = useGameForm();

  return (
    <div data-name="create-game-container" className={createStyles["wrapper"]}>
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
        addEntryInList={addEntryInList}
      />
      <DataListArea
        value={dataListValue}
        setValue={setDataListValue}
        dataList={dataList}
        dataListValueError={dataListValueError}
        setDataListValueError={setDataListValueError}
        editValue={editDataListValue}
        removeValueByIndex={removeDataListValueByIndex}
        addDataInList={addDataInList}
      />
    </div>
  );
}
