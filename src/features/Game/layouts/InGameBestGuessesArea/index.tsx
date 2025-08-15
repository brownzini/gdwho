
import GuessType from "@/types/GuessType";
import GameCard from "@/shared/GameCard";
import inGameBestGuessesStyles from "./styles";

interface Props {
    correctColor:string;
    bestGuessses: GuessType[];
}

export default function InGameBestGuessesArea({ correctColor, bestGuessses }:Props) {
  
  return (
    <div
      data-name="in-game-best-guesses-area"
      className={inGameBestGuessesStyles["container"]}
    >
      {bestGuessses.map((element, index) => {
        return (
          <GameCard
            key={index}
            type={element.type}
            editMode={false}
            color={correctColor}
            description={element.description}
          />
        );
      })}
    </div>
  );
}
