import { Dispatch, SetStateAction } from "react";

import Input from "@/components/Input";
import Button from "@/components/Button";
import entriesStyles from "./styles";

import EntryItem from "./EntryItem";

interface Props {
  readMode?: boolean;
  response: string;
  setResponse: Dispatch<SetStateAction<string>>;
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  output: string;
  setOutput: Dispatch<SetStateAction<string>>;
  level: string;
  setLevel: Dispatch<SetStateAction<string>>;
  responseError: string;
  setResponseError: Dispatch<SetStateAction<string>>;
  inputError: string;
  setInputError: Dispatch<SetStateAction<string>>;
  outputError: string;
  setOutputError: Dispatch<SetStateAction<string>>;
  labelError: string;
  setLabelError: Dispatch<SetStateAction<string>>;
}

export default function EntriesArea({
  readMode = false,
  response,
  setResponse,
  input,
  setInput,
  output,
  setOutput,
  level,
  setLevel,
  responseError,
  setResponseError,
  inputError,
  setInputError,
  outputError,
  setOutputError,
  labelError,
  setLabelError,
}: Props) {

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

  return (
    <div data-name="entries-area" className={entriesStyles["entriesArea"]}>
      <div data-name="response-area" className={entriesStyles["response"]}>
        <b className={entriesStyles["responseLabel"]}>Resposta:</b>
        <Input
          width="w-full"
          height="h-[50%]"
          value={response}
          borderStyle="border-[1px]"
          setValue={setResponse}
          placeHolder="Digite a resposta do seu jogo ..."
          styler={errorResponseFieldStyles}
          onClick={() => setResponseError("")}
        />
      </div>

      {!readMode && (
        <div data-name="entries-input-area" className={entriesStyles["input"]}>
          <b
            data-name="entries-input-label"
            className={entriesStyles["inputLabel"]}
          >
            Input:
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
          />
        </div>
      )}
      {!readMode && (
        <div
          data-name="entries-output-area"
          className={entriesStyles["output"]}
        >
          <b
            data-name="entries-output-label"
            className={entriesStyles["outputLabel"]}
          >
            Output:
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
          />
        </div>
      )}
      {!readMode && (
        <div data-name="entries-level-area" className={entriesStyles["level"]}>
          <div
            data-name="entries-level-wrapper-area"
            className={entriesStyles["levelWrapper"]}
          >
            <h2
              data-name="entries-level-title"
              className={entriesStyles["levelTitle"]}
            >
              Nivel de <br /> proximidade:
            </h2>
            <Input
              type="number"
              width="w-[25%] min-w-[100px]"
              height="h-[100%] p-3"
              value={level}
              setValue={setLevel}
              borderStyle="border-[1px]"
              fontSize="text-[0.7rem] sm:text-[1rem]"
              styler={errorLabelFieldStyles}
              onClick={() => setLabelError("")}
            />
          </div>
        </div>
      )}
      {!readMode && (
        <div
          data-name="entries-button-area"
          className={entriesStyles["buttonArea"]}
        >
          <Button
            width=" w-[100%] sm:w-[50%]"
            height=" h-[75%]"
            bgColor="bg-[#FA6C3E]"
            hoverBgColor="hover:bg-[#cc471b]"
            fontStyle={entriesStyles["buttonTitle"]}
          >
            INSERIR ENTRADA
          </Button>
        </div>
      )}
      {readMode && (
        <div
          data-name="entries-list-container"
          className={entriesStyles["entryListContainer"]}
        >
          <EntryItem
            input={"Trabalha com cons..."}
            output={"Mexe com ciment..."}
            label={100}
          />
          <EntryItem
            input={"Trabalha com cons..."}
            output={"Mexe com ciment..."}
            label={100}
          />
          <EntryItem
            input={"Trabalha com cons..."}
            output={"Mexe com ciment..."}
            label={100}
          />
          <EntryItem
            input={"Trabalha com cons..."}
            output={"Mexe com ciment..."}
            label={100}
          />
          <EntryItem
            input={"Trabalha com cons..."}
            output={"Mexe com ciment..."}
            label={100}
          />
          <EntryItem
            input={"Trabalha com cons..."}
            output={"Mexe com ciment..."}
            label={100}
          />
          <EntryItem
            input={"Trabalha com cons..."}
            output={"Mexe com ciment..."}
            label={100}
          />
        </div>
      )}
    </div>
  );
}
