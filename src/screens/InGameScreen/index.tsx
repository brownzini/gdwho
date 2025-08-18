import ScreenHeader from "@/shared/ScreenHeader";

import inGameScreenStyles from "./styles";
import CorrectAnswerFeature from "@/features/Game/CorrectAnswer";
import InGameFeature from "@/features/Game/InGame";
import { useState } from "react";

interface Props {
  username:string;
}

export default function InGameScreen({ username }:Props) {
  const [correctGuess, setCorrectGuess] = useState<string>("");
  return (
    <div
      data-name="in-game-screen-container"
      className={inGameScreenStyles["container"]}
    >
      <ScreenHeader nameTitle={username} />
      <div className="w-[93%] h-[1px] bg-[#D9D9D9]" />
      <div
        data-name="in-game-screen-wrapper"
        className={inGameScreenStyles["wrapper"]}
      >
        {correctGuess ? (
          <CorrectAnswerFeature response={correctGuess} />
        ) : (
          <InGameFeature setCorrectGuess={setCorrectGuess} />
        )}
      </div>
    </div>
  );
}
