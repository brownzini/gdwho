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
    handleValidation,
    responseError,
    setResponseError,
    inputError,
    setInputError,
    outputError,
    setOutputError,
    labelError,
    setLabelError,
    dataListValueError,
    setDataListValueError,
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
        level={label}
        setLevel={setLabel}
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
        handleValidation={handleValidation}
        dataListValueError={dataListValueError}
        setDataListValueError={setDataListValueError}
      />
    </div>
  );
}
