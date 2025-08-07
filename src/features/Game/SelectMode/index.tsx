import GameModeCard from "../layouts/GameModeCard";
import selectModeStyles from "./styles";

export default function SelectMode() {
  return (
    <div
      data-name="select-game-mode-container"
      className={selectModeStyles["container"]}
    >
      <GameModeCard typeMode="randomMode"   />
      <GameModeCard typeMode="creativeMode" />
      <GameModeCard typeMode="playerMode"   />
    </div>
  );
}
