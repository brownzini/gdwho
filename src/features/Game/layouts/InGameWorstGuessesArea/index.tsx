
import GuessType from "@/types/GuessType";
import GameCard from "@/shared/GameCard";
import inGameWorstGuessesArea from "./styles";

interface Props {
    worstGuessses: GuessType[];
}

export default function InGameWorstGuessesArea({ worstGuessses }:Props) {
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
            color={element.type === "distant" ? "#d20e0e" : "#0e49d2"}
            description={element.description}
          />
        );
      })}
    </div>
  );
}
