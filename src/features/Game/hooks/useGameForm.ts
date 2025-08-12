import { gameCreate } from "@/services/game";
import { useState } from "react";

export default function useGameForm() {
  const [response, setResponse] = useState<string>("");
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [level, setLevel] = useState<string>("100");

  const [dataListValue, setDataListValue] = useState<string>("");

  async function handleSubmit() {
    const requestData = {
      userId: 0,
      response: "",
      entries: [],
      dataList: [],
    };
    const result = await gameCreate({requestData});
    console.log(result);
  }

  return {
    response,
    setResponse,
    input,
    setInput,
    output,
    setOutput,
    level,
    setLevel,
    dataListValue,
    setDataListValue,
    handleSubmit,
  };
}
