import {
  invalidInputField,
  invalidLabelField,
  invalidOutputField,
} from "@/services/game/businessRuleValidations-service";
import { EntriesType, EntryConstTYpes } from "@/types/userContextType";
import { normalizeLabel } from "@/utils/fields";
import { SetStateAction, useState } from "react";

export default function useEntries() {
  const [entries, setEntries] = useState<EntriesType[]>([]);

  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [label, setLabel] = useState<string | number>("1");

  const [entrySelectedIndex, setEntrySelectedIndex] = useState<number>(0);

  const [inputError, setInputError] = useState<string>("");
  const [outputError, setOutputError] = useState<string>("");
  const [labelError, setLabelError] = useState<string>("");

  function resetFields() {
    setInput("");
    setOutput("");
    setLabel("1");
  }

  function entryValidationFields() {
    const notValidInput = invalidInputField(true, input);
    if (notValidInput) {
      setInputError(notValidInput);
      emitError(setInputError);
    }

    const notValidOutput = invalidOutputField(true, output);
    if (notValidOutput) {
      setOutputError(notValidOutput);
      emitError(setOutputError);
    }

    const toPositive = Math.abs(Number(label));
    const normalizedLabel = normalizeLabel(toPositive);
    const notValidLabel = invalidLabelField(true, Number(normalizedLabel));

    if (notValidLabel) {
      setLabelError(notValidLabel);
      emitError(setLabelError);
    }

    return !notValidInput && !notValidOutput && !notValidLabel;
  }

  function addEntryInList() {
    const id = entries.length + 1;
    const entrie = {
      id,
      input,
      output,
      label,
    };
    const validFeilds = entryValidationFields();
    if (validFeilds) {
      setEntries((prevEntries) => [...prevEntries, entrie]);
      resetFields();
    }
    return;
  }

  function editValueInEntries(
    key: EntryConstTYpes,
    index: number,
    newValue: string | number
  ) {
    setEntries((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], [key]: newValue };
      return next;
    });
  }

  function removeEntryByIndex(index: number) {
    setEntries((prev) => {
      const next = [...prev];
      next.splice(index, 1);
      return next;
    });
  }

  function emitError(setStateError: (value: SetStateAction<string>) => void) {
    setTimeout(() => {
      setStateError("");
    }, 500);
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
    editValueInEntries,
    removeEntryByIndex,
  };
}
