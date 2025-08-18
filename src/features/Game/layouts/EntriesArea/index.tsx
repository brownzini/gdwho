import { Dispatch, SetStateAction, useState } from "react";

import entriesStyles from "./styles";

import EntryItem from "./EntryItem";
import Input from "@/components/Input";
import SvgModel from "@/components/svg";
import Button from "@/components/Button";
import useLoading from "../../hooks/useLoading";

import { desnormalizeLabel, normalizeLabel } from "@/utils/fields";
import { EntriesType, EntryConstTYpes } from "@/types/userContextType";

interface Props {
  createMode: boolean;
  entries: EntriesType[];
  response: string;
  setResponse: Dispatch<SetStateAction<string>>;
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  output: string;
  setOutput: Dispatch<SetStateAction<string>>;
  label: string;
  setLabel: Dispatch<SetStateAction<string | number>>;
  responseError: string;
  setResponseError: Dispatch<SetStateAction<string>>;
  inputError: string;
  setInputError: Dispatch<SetStateAction<string>>;
  outputError: string;
  setOutputError: Dispatch<SetStateAction<string>>;
  labelError: string;
  setLabelError: Dispatch<SetStateAction<string>>;
  addEntryInList(): void;
  setEntrySelectedIndex: Dispatch<SetStateAction<number>>;
  editEntriesSubmit?(key: EntryConstTYpes): Promise<void>;
  editResponseSubmit?: () => Promise<void>;
  deleteEntrySubmit?: (id: number, index: number) => Promise<void>;
}

export default function EntriesArea(props: Props) {
  const {
    entries,
    createMode,
    response,
    setResponse,
    input,
    setInput,
    output,
    setOutput,
    label,
    setLabel,
    responseError,
    setResponseError,
    inputError,
    setInputError,
    outputError,
    setOutputError,
    labelError,
    setLabelError,
    addEntryInList,
    editEntriesSubmit,
    setEntrySelectedIndex,
    editResponseSubmit,
    deleteEntrySubmit,
  } = props;

  const { loading, setLoading } = useLoading();
  const [readMode, setReadMode] = useState<boolean>(!createMode);

  const getErrorStyles = (
    error: string,
    styles: string,
    defaultStyles: string
  ) => (error ? styles : defaultStyles);

  const buttonStyles = createMode
    ? "bg-[#FA6C3E] hover:bg-[#FA6C3E]"
    : "bg-[#6014b0] hover:bg-[#140524]";

  const buttonText = createMode ? "INSERIR ENTRADA" : "VOLTAR PARA LISTA";

  const toggleReadMode = () => setReadMode(true);
  const handleButton = () => createMode ? addEntryInList() : toggleReadMode();
  const handleFieldSubmit = async (key: EntryConstTYpes | "response") => {
    setLoading(true);
    try {
      if (key === "response" && editResponseSubmit) {
        await editResponseSubmit();
      } else if (editEntriesSubmit && key !== "response") {
        await editEntriesSubmit(key);
      }
    } finally {
      setLoading(false);
    }
  };

  const customizedSetLabel = (value: string) =>
    setLabel(desnormalizeLabel(value));

  const handleDeleteEntry = async (id: number, index: number) => {
    if (!deleteEntrySubmit) return;
    setLoading(true);
    await deleteEntrySubmit(id, index);
    setLoading(false);
  };

  const changeToEditMode = (
    index: number,
    oldInput: string,
    oldOutput: string,
    oldLabel: string | number
  ) => {
    setInput(oldInput);
    setOutput(oldOutput);
    setLabel(oldLabel.toString());
    setEntrySelectedIndex(index);
    setReadMode(false);
  };

  const renderingLabel = normalizeLabel(label);

  return (
    <div 
      data-name="entries-area" 
      className={entriesStyles["entriesArea"]}
    >
      <div 
        data-name="response-area" 
        className={entriesStyles["response"]}
      >
        <b className={entriesStyles["responseLabel"]}>
          Resposta:<span className={entriesStyles["requiredMark"]}>*</span>
        </b>
        <Input
          width="w-full"
          height="h-[50%]"
          value={response}
          borderStyle="border-[1px]"
          setValue={setResponse}
          placeHolder="Digite a resposta do seu jogo ..."
          styler={getErrorStyles(
            responseError,
            "border-[#dc362e] text-[#dc362e]",
            "border-[#C4C4C4] text-[#424242]"
          )}
          onClick={() => setResponseError("")}
          secondAction={() => handleFieldSubmit("response")}
          disabled={loading}
        />
      </div>

      {!readMode ? (
        <>
          <div
            data-name="entries-input-area"
            className={entriesStyles["input"]}
          >
            <b className={entriesStyles["inputLabel"]}>
              Input:<span className={entriesStyles["requiredMark"]}>*</span>
            </b>
            <Input
              width="w-full"
              height="h-[50%]"
              value={input}
              setValue={setInput}
              placeHolder="Ex: trabalha com construções"
              borderStyle="border-[1px]"
              onClick={() => setInputError("")}
              styler={getErrorStyles(
                inputError,
                "border-[#dc362e] text-[#dc362e]",
                "border-[#31B3B5] text-[#3A5F60]"
              )}
              secondAction={() => handleFieldSubmit("input")}
              disabled={loading}
            />
          </div>

          <div
            data-name="entries-output-area"
            className={entriesStyles["output"]}
          >
            <b className={entriesStyles["outputLabel"]}>
              Output:<span className={entriesStyles["requiredMark"]}>*</span>
            </b>
            <Input
              width="w-full"
              height="h-[50%]"
              value={output}
              setValue={setOutput}
              placeHolder="Ex: mexe com cimento"
              borderStyle="border-[1px]"
              onClick={() => setOutputError("")}
              styler={getErrorStyles(
                outputError,
                "border-[#dc362e] text-[#dc362e]",
                "border-[#8B3D4B] text-[#603A41]"
              )}
              secondAction={() => handleFieldSubmit("output")}
              disabled={loading}
            />
          </div>

          <div
            data-name="entries-level-area"
            className={entriesStyles["level"]}
          >
            <div
              data-name="entries-level-wrapper-area"
              className={entriesStyles["levelWrapper"]}
            >
              <h2 className={entriesStyles["levelTitle"]}>
                Nivel de <br /> proximidade:
                <span className={entriesStyles["requiredMark"]}>*</span>
              </h2>
              <Input
                type="number"
                width="w-[25%] min-w-[100px]"
                height="h-full p-3"
                value={renderingLabel}
                setValue={customizedSetLabel}
                borderStyle="border-[1px]"
                fontSize="text-[0.7rem] sm:text-[1rem]"
                styler={getErrorStyles(
                  labelError,
                  "border-[#dc362e] text-[#dc362e] text-center font-black",
                  "border-[#522161] text-[#522161] text-center font-black"
                )}
                onClick={() => setLabelError("")}
                secondAction={() => handleFieldSubmit("label")}
                disabled={loading}
              />
            </div>

            {createMode && (
              <div
                data-name="entries-label-count-icon"
                className={entriesStyles["iconStyle"]}
              >
                <h2 className={entriesStyles["entrieLabel"]}>Total:</h2>
                <b className={entriesStyles["entrieCount"]}>{entries.length}</b>
              </div>
            )}
          </div>

          <div
            data-name="entries-button-area"
            className={entriesStyles["buttonArea"]}
          >
            <Button
              width="w-full sm:w-[50%]"
              height="h-[50%] max-h-[25px] sm:max-h-[57px]"
              bgColor={buttonStyles}
              fontStyle={entriesStyles["buttonTitle"]}
              onClick={handleButton}
              disabled={loading}
            >
              {loading ? (
                <SvgModel
                  name="loading"
                  width="75%"
                  height="75%"
                  color="#FFF"
                />
              ) : (
                buttonText
              )}
            </Button>
          </div>
        </>
      ) : (
        <div
          data-name="entries-list-container"
          className={entriesStyles["entryListContainer"]}
        >
          {entries.map((element, index) => (
            <EntryItem
              key={index}
              input={element.input}
              output={element.output}
              label={normalizeLabel(element.label)}
              onEdit={() =>
                changeToEditMode(
                  index,
                  element.input,
                  element.output,
                  element.label
                )
              }
              onDelete={() => handleDeleteEntry(element.id, index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
