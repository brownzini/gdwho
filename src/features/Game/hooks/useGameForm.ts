import { useState } from "react";
import {
  invalidDataListValueField,
  invalidInputField,
  invalidLabelField,
  invalidOutputField,
  invalidResponseField,
} from "@/services/game/businessRuleValidations-service";
import { gameCreate } from "@/services/game/api-service";

export default function useGameForm() {
  const [response, setResponse] = useState<string>("");
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [label, setLabel] = useState<string>("100");

  const [responseError, setResponseError] = useState<string>("");
  const [inputError, setInputError] = useState<string>("");
  const [outputError, setOutputError] = useState<string>("");
  const [labelError, setLabelError] = useState<string>("");

  const [dataListValue, setDataListValue] = useState<string>("");
  const [dataListValueError, setDataListValueError] = useState<string>("");

  function handleValidation() {
    const notValidResponse = invalidResponseField(true, response);
    if (notValidResponse) setResponseError(notValidResponse);

    const notValidInput = invalidInputField(true, input);
    if (notValidInput) setInputError(notValidInput);

    const notValidOutput = invalidOutputField(true, output);
    if (notValidOutput) setOutputError(notValidOutput);

    const normalizedLabel = label ? Math.abs(parseInt(label)) : 0;
    const notValidLabel = invalidLabelField(true, normalizedLabel);
    if (notValidLabel) setLabelError(notValidLabel);

    const notValidDataListValue = invalidDataListValueField(true, response);
    if (notValidDataListValue) setDataListValueError(notValidDataListValue);

    const allow =
      !notValidResponse &&
      !notValidInput &&
      !notValidOutput &&
      !notValidLabel &&
      notValidDataListValue;

    console.log(allow ? "sucesso" : "invalido");
    return true;
  }

  async function handleSubmit() {
    const requestData = {
      userId: 0,
      response: "",
      entries: [],
      dataList: [],
    };
    const result = await gameCreate({ requestData });
    console.log(result);
  }

  return {
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
    handleSubmit,
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
  };
}
