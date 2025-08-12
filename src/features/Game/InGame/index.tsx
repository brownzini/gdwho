
import { Dispatch, SetStateAction, useState } from "react";

import GuessType from "@/types/GuessType";

import InGameInputArea from "../layouts/InGameInputArea";
import InGameHeaderArea from "../layouts/InGameHeaderArea";
import InGameBestGuessesArea from "../layouts/InGameBestGuessesArea";
import InGameWorstGuessesArea from "../layouts/InGameWorstGuessesArea";

import inGameStyles from "./styles";
import InGameFinishButtonArea from "../layouts/InGameFinishButtonArea";

interface Props {
  setIsThatCorrect: Dispatch<SetStateAction<boolean>>;
}

export default function InGameFeature({ setIsThatCorrect }:Props) {
  const [value, setValue] = useState<string>("");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [bestGuessses, setBestGuessses] = useState<GuessType[]>([
    {
      type: "correct",
      description: "teste",
    },
    {
      type: "correct",
      description: "muito proximo",
    },
  ]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [worstGuessses, setWorstGuessses] = useState<GuessType[]>([
    {
      type: "nearby",
      description: "proximo",
    },
    {
      type: "distant",
      description: "distante",
    },
  ]);

  return (
    <div 
      data-name="in-game-container" 
      className={inGameStyles["container"]}
    >
      <InGameHeaderArea 
        creatorUsername="Gabriel Robinho Alves da silva" 
      />
      <div 
        data-name="in-game-content" 
        className={inGameStyles["content"]}
      >
        <InGameBestGuessesArea bestGuessses={bestGuessses} />
        <InGameWorstGuessesArea worstGuessses={worstGuessses} />
        <InGameInputArea 
          value={value} 
          setValue={setValue} 
        />
        <InGameFinishButtonArea />
      </div>
    </div>
  );
}
