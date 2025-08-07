import ScreenHeader from "@/shared/ScreenHeader";

import inGameScreenStyles from "./styles";
import CorrectAnswer from "@/features/Game/CorrectAnswer";
import InGame from "@/features/Game/InGame";

export default function InGameScreen() {
  return (
    <div
      data-name="in-game-screen-container"
      className={inGameScreenStyles["container"]}
    >
      <ScreenHeader
        nameTitle="Gabriel"
        todayTitle="Hoje é segunda feira , 11/07/2025"
      />
      <div className="w-[93%] h-[1px] bg-[#D9D9D9]" />
      <div
        data-name="in-game-screen-wrapper"
        className={inGameScreenStyles["wrapper"]}
      >
        {/* <InGame /> */}
        <CorrectAnswer />
      </div>
    </div>
  );
}
