
import GuessType from "@/types/GuessType";
import GameCard from "@/shared/GameCard";
import inGameWorstGuessesArea from "./styles";

interface Props {
    worstGuessses: GuessType[];
    worstColors: {
        nearby: string;
        distant: string;
    }
}

export default function InGameWorstGuessesArea({ worstGuessses, worstColors }:Props) {
  return (
    <div
      data-name="in-game-worst-guesses-area"
      className={inGameWorstGuessesArea["container"]}
    >
      {worstGuessses.map((element, index) => {
        return (
          <GameCard
            key={index}
            type={element.type}
            editMode={false}
            color={element.type === "distant" ? worstColors.distant : worstColors.nearby}
            description={element.description}
          />
        );
      })}
    </div>
  );
}
