import { Dispatch, SetStateAction, useState } from "react";

import Input from "@/components/Input";
import Button from "@/components/Button";
import entriesStyles from "./styles";

import EntryItem from "./EntryItem";
import { EntriesType, EntryConstTYpes } from "@/types/userContextType";
import { desnormalizeLabel, normalizeLabel } from "@/utils/fields";

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
  setLabel: Dispatch<SetStateAction<string>>;
  responseError: string;
  setResponseError: Dispatch<SetStateAction<string>>;
  inputError: string;
  setInputError: Dispatch<SetStateAction<string>>;
  outputError: string;
  setOutputError: Dispatch<SetStateAction<string>>;
  labelError: string;
  setLabelError: Dispatch<SetStateAction<string>>;
  addEntryInList(): void;
  setSelectedIndex: Dispatch<SetStateAction<number>>;
  editEntriesSubmit?(key: EntryConstTYpes): Promise<void>;
  editResponseSubmit?: () => Promise<void>;
}

export default function EntriesArea({
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
  setSelectedIndex,
  editResponseSubmit,
}: Props) {

  const [readMode, setReadMode] = useState<boolean>(!createMode);

  const errorResponseFieldStyles = responseError
    ? "  border-[#dc362e] text-[#dc362e] "
    : "  border-[#C4C4C4] text-[#424242] ";

  const errorInputFieldStyles = inputError
    ? "  border-[#dc362e] text-[#dc362e] "
    : "  border-[#31B3B5] text-[#3A5F60] ";

  const errorOutputFieldStyles = outputError
    ? "  border-[#dc362e] text-[#dc362e] "
    : "  border-[#8B3D4B] text-[#603A41] ";

  const errorLabelFieldStyles = labelError
    ? "  border-[#dc362e] text-[#dc362e] text-center font-black "
    : "  border-[#522161] text-[#522161] text-center font-black ";

  const buttonStyles = createMode
    ? "bg-[#FA6C3E] hover:bg-[#FA6C3E]"
    : "bg-[#6014b0] hover:bg-[#140524]";

  const changeToEditMode = (
    index: number,
    oldInput: string,
    oldOutput: string,
    oldLabel: string | number
  ) => {
    setInput(oldInput);
    setOutput(oldOutput);
    setLabel(oldLabel.toString());
    setSelectedIndex(index);
    setReadMode(false);
  };

  const handleButton = () => {
    if (createMode) addEntryInList();
    else setReadMode(true);
  };

  const handleSetResponseField = async () => editResponseSubmit && await editResponseSubmit();
  const handleSetInputField = async () => editEntriesSubmit && await editEntriesSubmit("input");
  const handleSetOutputField = async () => editEntriesSubmit && await editEntriesSubmit("output");
  const handleSetLabelField = async () => editEntriesSubmit && await editEntriesSubmit("label");

  const customizedSetLabel = (value:string) => {
    const normalized = desnormalizeLabel(value);
    setLabel(normalized);
  }

  const renderingLabel = (createMode) ? label: normalizeLabel(label);

  return (
    <div data-name="entries-area" className={entriesStyles["entriesArea"]}>
      <div data-name="response-area" className={entriesStyles["response"]}>
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
          styler={errorResponseFieldStyles}
          onClick={() => setResponseError("")}
          alternativeAction={handleSetResponseField}
        />
      </div>

      {!readMode && (
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
              styler={errorInputFieldStyles}
              alternativeAction={handleSetInputField}
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
              styler={errorOutputFieldStyles}
              alternativeAction={handleSetOutputField}
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
                height="h-[100%] p-3"
                value={renderingLabel}
                setValue={customizedSetLabel}
                borderStyle="border-[1px]"
                fontSize="text-[0.7rem] sm:text-[1rem]"
                styler={errorLabelFieldStyles}
                onClick={() => setLabelError("")}
                alternativeAction={handleSetLabelField}
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
              width=" w-full sm:w-[50%]"
              height=" h-[50%] max-h-[25px] sm:max-h-[57px]"
              bgColor={buttonStyles}
              fontStyle={entriesStyles["buttonTitle"]}
              onClick={handleButton}
            >
              {createMode ? "INSERIR ENTRADA" : "CONFIRMAR ALTERAÇÃO"}
            </Button>
          </div>
        </>
      )}
      {readMode && (
        <div
          data-name="entries-list-container"
          className={entriesStyles["entryListContainer"]}
        >
          {entries.map((element, index) => {
            return (
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
                onDelete={() => console.log("deleta")}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
