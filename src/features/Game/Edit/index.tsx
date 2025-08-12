"use client";

import { useState } from "react";

import editStyles from "./styles";
import EntriesArea from "../layouts/EntriesArea";
import DataListArea from "../layouts/DataListArea";

export default function EditFeature() {
  
  const [response, setResponse] = useState<string>("");
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [level, setLevel] = useState<string>("100");

  const [dataListValue, setDataListValue] = useState<string>("");

  return (
    <div data-name="edit-game-container" className={editStyles["wrapper"]}>
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
