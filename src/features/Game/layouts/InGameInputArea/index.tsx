import Input from "@/components/Input";
import inGameInputStyles from "./styles";
import { Dispatch, SetStateAction } from "react";

interface Props {
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
}

export default function InGameInputArea({ value, setValue }:Props) {
  return (
    <div
      data-name="in-game-guesses-input-area"
      className={inGameInputStyles["container"]}
    >
      <div
        data-name="in-game-best-guesses-input-label"
        className={inGameInputStyles["inputLabel"]}
      >
        Palpites:
      </div>
      <div
        data-name="in-game-best-guesses-input-content"
        className={inGameInputStyles["inputContent"]}
      >
        <Input
          type="text"
          value={value}
          setValue={setValue}
          borderStyle="border-[1px] border-[#747A79] rounded-[5px]"
          fontColor="text-[#747A79] placeholder-[#747A79]"
          placeHolder="Escreva seu palpite ..."
        />
      </div>
    </div>
  );
}
