import Input from "@/components/Input";
import Button from "@/components/Button";
import entriesStyles from "./styles";
import { useState } from "react";

export default function Entries() {
  
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
      <div className="flex items-center justify-start">
        <div className="flex items-center justify-start gap-2">
          <h2 className="text-[#2F2433] font-black flex leading-[16px]">
            Nivel de <br /> proximidade:
          </h2>
          <Input
            type="number"
            width="w-[25%]"
            height="h-[100%] p-3"
            value={level}
            setValue={setLevel}
            borderStyle="border-[#522161] border-[1px]"
            fontColor="text-[#522161] text-center font-black"
          />
        </div>
      </div>
      <div className="col-span-2 h-[100%] flex items-center justify-start">
        <Button
          width=" w-[31%]"
          height=" h-[75%]"
          bgColor="bg-[#FA6C3E]"
          hoverBgColor="hover:bg-[#cc471b]"
        >
          <b className="text-[#fff] font-light w-full h-full grid items-center justify-center">INSERIR ENTRADA</b>
        </Button>
      </div>
    </div>
  );
}
