import {
  invalidInputField,
  invalidLabelField,
  invalidOutputField,
} from "@/services/game/businessRuleValidations-service";
import { EntriesType } from "@/types/userContextType";
import { normalizeLabel } from "@/utils/fields";
import { useState } from "react";

export default function useEntries() {
  const [entries, setEntries] = useState<EntriesType[]>([]);

  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [label, setLabel] = useState<string>("100");

  const [entrySelectedIndex, setEntrySelectedIndex] = useState<number>(0);

  const [inputError, setInputError] = useState<string>("");
  const [outputError, setOutputError] = useState<string>("");
  const [labelError, setLabelError] = useState<string>("");

  function resetFields() {
    setInput("");
    setOutput("");
    setLabel("100");
  }

  function entryValidationFields() {
    const notValidInput = invalidInputField(true, input);
    if (notValidInput) setInputError(notValidInput);

    const notValidOutput = invalidOutputField(true, output);
    if (notValidOutput) setOutputError(notValidOutput);

    const toPositive = Math.abs(Number(label));
    const normalizedLabel = normalizeLabel(toPositive);
    const notValidLabel = invalidLabelField(true, Number(normalizedLabel));
    if (notValidLabel) setLabelError(notValidLabel);

    return !notValidInput && !notValidOutput && !notValidLabel;
  }

  function addEntryInList() {
    const id = entries.length + 1;
    const normalizedLabel = label ? Math.abs(parseInt(label)) : 0;
    const calculatedLabel = normalizedLabel / 100;
    const entrie = {
      id,
      input,
      output,
      label: calculatedLabel,
    };
    const validFeilds = entryValidationFields();
    if (validFeilds) {
      setEntries((prevEntries) => [...prevEntries, entrie]);
      resetFields();
    }
    return;
  }

  return {
    entries,
    setEntries,
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
    entryValidationFields,
    entrySelectedIndex,
    setEntrySelectedIndex,
  };
}
