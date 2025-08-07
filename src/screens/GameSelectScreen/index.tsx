import Header from "@/shared/Header";
import ScreenTitle from "@/shared/ScreenTitle";
import gameSelectScreenStyles from "./styles";
import SelectMode from "@/features/Game/SelectMode";
import Button from "@/components/Button";

export default function GameSelectScreen() {
  return (
    <div
      data-name="game-select-screen-container"
      className={gameSelectScreenStyles["container"]}
    >
      <Header
        nameTitle="Gabriel"
        todayTitle="Hoje é segunda feira , 11/07/2025"
      />
      <div className="w-[93%] h-[1px] bg-[#D9D9D9]" />
      <div
        data-name="game-select-wrapper"
        className={gameSelectScreenStyles["wrapper"]}
      >
        <ScreenTitle title="Modo de Jogo:" />
        <SelectMode />
        <div
          data-name="game-select-button-area"
          className={gameSelectScreenStyles["buttonArea"]}
        >
          <Button
            width="w-[20%] min-w-[50px] max-w-[100px]"
            height="h-[57%] sm:h-[75%]"
            bgColor="bg-[#939292]"
            hoverBgColor="hover:bg-[#504c4c]"
          >
            <p
              data-name="game-select-button-description"
              className={gameSelectScreenStyles["backButtonDescription"]}
            >
              voltar
            </p>
          </Button>
        </div>
      </div>
    </div>
  );
}
