import Input from "@/components/Input";
import Button from "@/components/Button";
import entriesStyles from "./styles";
import { useState } from "react";

import EntryItem from "./EntryItem";

interface Props {
  readMode?: boolean;
}

export default function Entries({ readMode = false }: Props) {
  const [response, setResponse] = useState<string>("");
  const [input, setInpuit] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [level, setLevel] = useState<string>("100");

  return (
    <div className={entriesStyles["entriesArea"]}>
      <div className={entriesStyles["response"]}>
        <b className={entriesStyles["responseLabel"]}>Resposta:</b>
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
        <div className={entriesStyles["input"]}>
          <b className={entriesStyles["inputLabel"]}>Input:</b>
          <Input
            width="w-full"
            height="h-[50%]"
            value={input}
            setValue={setInpuit}
            placeHolder="Ex: trabalha com construções"
            borderStyle="border-[#31B3B5] border-[1px]"
            fontColor="text-[#3A5F60]"
          />
        </div>
      )}
      {!readMode && (
        <div className={entriesStyles["output"]}>
          <b className={entriesStyles["outputLabel"]}>Output:</b>
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
        <div className={entriesStyles["level"]}>
          <div className={entriesStyles["levelWrapper"]}>
            <h2 className={entriesStyles["levelTitle"]}>
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
        <div className={entriesStyles["buttonArea"]}>
          <Button
            width=" w-[100%] sm:w-[50%]"
            height=" h-[75%]"
            bgColor="bg-[#FA6C3E]"
            hoverBgColor="hover:bg-[#cc471b]"
          >
            <b className="text-[#fff] font-bold w-full h-full grid items-center justify-center">
              INSERIR ENTRADA
            </b>
          </Button>
        </div>
      )}
      {readMode && (
        <div className={entriesStyles["entryListContainer"]}>
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
