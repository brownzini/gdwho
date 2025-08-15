import { Dispatch, SetStateAction } from "react";

import InGameInputArea from "../layouts/InGameInputArea";
import InGameHeaderArea from "../layouts/InGameHeaderArea";
import InGameBestGuessesArea from "../layouts/InGameBestGuessesArea";
import InGameWorstGuessesArea from "../layouts/InGameWorstGuessesArea";

import inGameStyles from "./styles";
import InGameFinishButtonArea from "../layouts/InGameFinishButtonArea";
import useInGame from "../hooks/useInGame";

interface Props {
  setIsThatCorrect: Dispatch<SetStateAction<boolean>>;
}

export default function InGameFeature({ setIsThatCorrect }: Props) {
  const { bestGuessses, worstGuessses, value, setValue, handleSubmit } = useInGame(
    { setIsThatCorrect }
  );

  return (
    <div 
      data-name="in-game-container" 
      className={inGameStyles["container"]}
    >
      <InGameHeaderArea creatorUsername="Gabriel Robinho Alves da silva" />
      <div 
        data-name="in-game-content" 
        className={inGameStyles["content"]}
      >
        <InGameBestGuessesArea bestGuessses={bestGuessses} />
        <InGameWorstGuessesArea worstGuessses={worstGuessses} />
        <InGameInputArea
          value={value}
          setValue={setValue}
          handleSubmit={handleSubmit}
        />
        <InGameFinishButtonArea />
      </div>
    </div>
  );
}
