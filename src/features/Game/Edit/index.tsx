"use client";

import EntriesArea from "../layouts/EntriesArea";
import DataListArea from "../layouts/DataListArea";

import useDataList from "../hooks/useDataList";
import useEntries from "../hooks/useEntries";
import useResponse from "../hooks/useResponse";

import editStyles from "./styles";

import useGameEditForm from "../hooks/useGameEditForm";

export default function EditFeature() {
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
    setEntries,
    entryValidationFields,
    entrySelectedIndex,
    setEntrySelectedIndex,
  } = useEntries();

  const {
    dataList,
    setDataList,
    dataListValue,
    setDataListValue,
    dataListValueError,
    setDataListValueError,
    addDataInList,
    editDataListValue,
    removeDataListValueByIndex,
    dataListValidationFields,
    dataSelectedIndex,
    setDataSelectedIndex,
  } = useDataList();

  const { editEntriesSubmit, editResponseSubmit, editDataListSubmit } =
    useGameEditForm({
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
      entryValidationFields,
      responseValidation,
      dataListValidationFields,
      dataSelectedIndex,
    });

  return (
    <div data-name="edit-game-container" className={editStyles["wrapper"]}>
      <EntriesArea
        createMode={false}
        entries={entries}
        response={response}
        setResponse={setResponse}
        input={input}
        setInput={setInput}
        output={output}
        setOutput={setOutput}
        label={label.toString()}
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
        editEntriesSubmit={editEntriesSubmit}
        setEntrySelectedIndex={setEntrySelectedIndex}
        editResponseSubmit={editResponseSubmit}
      />
      <DataListArea
        createMode={false}
        dataList={dataList}
        value={dataListValue}
        setValue={setDataListValue}
        dataListValueError={dataListValueError}
        setDataListValueError={setDataListValueError}
        editValue={editDataListValue}
        removeValueByIndex={removeDataListValueByIndex}
        addDataInList={addDataInList}
        editDataListSubmit={editDataListSubmit}
        setDataSelectedIndex={setDataSelectedIndex}
      />
    </div>
  );
}
