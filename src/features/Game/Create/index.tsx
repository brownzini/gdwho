"use client";

import DataListArea from "../layouts/DataListArea";
import EntriesArea from "../layouts/EntriesArea";
import createStyles from "./styles";
import useGameForm from "../hooks/useGameForm";

export default function CreateFeature() {

  const { 
      response, setResponse,
      input, setInput,
      output, setOutput,
      level, setLevel,
      dataListValue, setDataListValue,
  } = useGameForm();

  return (
    <div 
      data-name="create-game-container" 
      className={createStyles["wrapper"]}
    >
      <EntriesArea
        response={response}
        setResponse={setResponse}
        input={input}
        setInput={setInput}
        output={output}
        setOutput={setOutput}
        level={level}
        setLevel={setLevel}
      />
      <DataListArea 
        value={dataListValue}
        setValue={setDataListValue}
      />
    </div>
  );
}
