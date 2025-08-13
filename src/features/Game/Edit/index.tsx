"use client";

import editStyles from "./styles";
import EntriesArea from "../layouts/EntriesArea";
import DataListArea from "../layouts/DataListArea";
import useGameForm from "../hooks/useGameForm";
import useDataList from "../hooks/useDataList";
import useEntries from "../hooks/useEntries";
import useResponse from "../hooks/useResponse";
import { useScreen } from "@/contexts/screen/useScreen";

export default function EditFeature() {
  const {
    response,
    setResponse,
    responseError,
    setResponseError,
    responseValidation,
  } = useResponse();

  const {
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
    entries,
  } = useEntries();

  const {
    dataList,
    dataListValue,
    setDataListValue,
    dataListValueError,
    setDataListValueError,
    editDataListValue,
    removeDataListValueByIndex,
    addDataInList,
  } = useDataList();

  const { nextScreen } = useScreen();

  const { handleSubmit } = useGameForm({
    id: 1,
    response,
    entries,
    dataList,
    setResponseError,
    responseValidation,
    nextScreen,
  });

  return (
    <div data-name="edit-game-container" className={editStyles["wrapper"]}>
      <EntriesArea
        readMode={true}
        createMode={false}
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
