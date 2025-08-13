"use client";

import DataListArea from "../layouts/DataListArea";
import EntriesArea from "../layouts/EntriesArea";
import createStyles from "./styles";
import useGameForm from "../hooks/useGameForm";
import useEntries from "../hooks/useEntries";
import useDataList from "../hooks/useDataList";
import useResponse from "../hooks/useResponse";
import { useScreen } from "@/contexts/screen/useScreen";

export default function CreateFeature() {

  const {
    response,
    setResponse,
    responseError,
    setResponseError,
    responseValidation,
  } = useResponse();

  const {
    entries,
    input,
    setInput,
    output,
    setOutput,
    label,
    setLabel,
    inputError,
    setInputError,
    outputError,
    setOutputError,
    labelError,
    setLabelError,
    addEntryInList,
  } = useEntries();

  const {
    dataList,
    dataListValue,
    setDataListValue,
    dataListValueError,
    setDataListValueError,
    addDataInList,
    editDataListValue,
    removeDataListValueByIndex,
  } = useDataList();

  const { nextScreen } = useScreen();
  
  const { handleSubmit } = useGameForm({
      id:1,
      response,
      entries,
      dataList,
      setResponseError,
      responseValidation,
      nextScreen,
  });

  return (
    <div 
      data-name="create-game-container" 
      className={createStyles["wrapper"]}
    >
      <EntriesArea
        createMode={true}
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
        entries={entries}
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
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
