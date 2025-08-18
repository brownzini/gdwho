import { Dispatch, SetStateAction } from "react";

import InGameInputArea from "../layouts/InGameInputArea";
import InGameHeaderArea from "../layouts/InGameHeaderArea";
import InGameBestGuessesArea from "../layouts/InGameBestGuessesArea";
import InGameWorstGuessesArea from "../layouts/InGameWorstGuessesArea";

import inGameStyles from "./styles";
import InGameFinishButtonArea from "../layouts/InGameFinishButtonArea";
import useInGame from "../hooks/useInGame";
import { useUser } from "@/contexts/user/useUser";

interface Props {
  setCorrectGuess: Dispatch<SetStateAction<string>>;
}

export default function InGameFeature({ setCorrectGuess }: Props) {
  const { colors, volume } = useUser();

  const {
    bestGuessses,
    worstGuessses,
    value,
    setValue,
    handleSubmit,
    getCreatorGameName,
  } = useInGame({ volume, setCorrectGuess });

  const worstColors = {
    nearby: colors.nearby,
    distant: colors.distant,
  };

  return (
    <div data-name="in-game-container" className={inGameStyles["container"]}>
      <InGameHeaderArea creatorUsername={getCreatorGameName()} />
      <div data-name="in-game-content" className={inGameStyles["content"]}>
        <InGameBestGuessesArea
          correctColor={colors.correct}
          bestGuessses={bestGuessses}
        />
        <InGameWorstGuessesArea
          worstColors={worstColors}
          worstGuessses={worstGuessses}
        />
        <InGameInputArea
          value={value}
          setValue={setValue}
          handleSubmit={handleSubmit}
        />
        <InGameFinishButtonArea volume={volume} />
      </div>
    </div>
  );
}
