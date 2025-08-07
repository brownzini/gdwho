import GameModeCard from "../layouts/GameModeCard";
import selectModeStyles from "./styles";

interface Props {
  onOpenModal: () => void;
}

export default function SelectMode({ onOpenModal }:Props) {
  return (
    <div
      data-name="select-game-mode-container"
      className={selectModeStyles["container"]}
    >
      <GameModeCard typeMode="randomMode"   />
      <GameModeCard typeMode="creativeMode" />
      <GameModeCard 
        typeMode="playerMode" 
        onOpenModal={onOpenModal}  
      />
    </div>
  );
}
