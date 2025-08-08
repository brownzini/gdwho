import Input from "@/components/Input";
import Button from "@/components/Button";
import entriesStyles from "./styles";
import { useState } from "react";

import EntryItem from "./EntryItem";

interface Props {
  readMode?: boolean;
}

export default function EntriesArea({ readMode = false }: Props) {
  const [response, setResponse] = useState<string>("");
  const [input, setInpuit] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [level, setLevel] = useState<string>("100");

  return (
    <div 
      data-name="entries-area" 
      className={entriesStyles["entriesArea"]}
    >
      <div 
        data-name="response-area" 
        className={entriesStyles["response"]}
      >
        <b
          data-name="response-label"
          className={entriesStyles["responseLabel"]}
        >
          Resposta:
        </b>
        <Input
          width="w-full"
          height="h-[50%]"
          value={response}
          setValue={setResponse}
          placeHolder="Digite a resposta do seu jogo ..."
          borderStyle="border-[#C4C4C4] border-[1px]"
          fontColor="text-[#424242]"
        />
      </div>

      {!readMode && (
        <div 
          data-name="entries-input-area" 
          className={entriesStyles["input"]}
        >
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
            setValue={setInpuit}
            fontColor="text-[#3A5F60]"
            placeHolder="Ex: trabalha com construções"
            borderStyle="border-[#31B3B5] border-[1px]"
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
            borderStyle="border-[#8B3D4B] border-[1px]"
            fontColor="text-[#603A41]"
          />
        </div>
      )}
      {!readMode && (
        <div 
          data-name="entries-level-area" 
          className={entriesStyles["level"]}
        >
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
              borderStyle="border-[#522161] border-[1px]"
              fontColor="text-[#522161] text-center font-black"
              fontSize="text-[0.7rem] sm:text-[1rem]"
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
          >
            <b
              data-name="entries-button-title"
              className={entriesStyles["buttonTitle"]}>
              INSERIR ENTRADA
            </b>
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
