import { useScreen } from "@/contexts/screen/useScreen";
import GameModeCard from "../layouts/GameModeCardArea";
import selectModeStyles from "./styles";

interface Props {
  onOpenModal: () => void;
}

export default function SelectMode({ onOpenModal }:Props) {

  const { nextScreen } = useScreen();

  return (
    <div
      data-name="select-game-mode-container"
      className={selectModeStyles["container"]}
    >
      <GameModeCard 
        typeMode="randomMode"   
        handleClick={() => nextScreen("inGameScreen")}
      />
      <GameModeCard 
        typeMode="creativeMode" 
        handleClick={() => nextScreen("inGameScreen")}
      />
      <GameModeCard 
        typeMode="playerMode" 
        handleClick={onOpenModal}  
      />
    </div>
  );
}
