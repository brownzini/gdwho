import Button from "@/components/Button";
import inGameFinishButtonStyles from "./styles";
import { useScreen } from "@/contexts/screen/useScreen";

export default function InGameFinishButtonArea() {
  const { backScreen } = useScreen();
  return (
    <div 
      data-name="in-game-button-area" 
      className={inGameFinishButtonStyles["container"]}
    >
      <div
        data-name="in-game-button-wrapper"
        className={inGameFinishButtonStyles["wrapper"]}
      >
        <Button
          width="w-full min-w-[100px]"
          height="h-full min-h-[50px]"
          bgColor="bg-[#DC3333]"
          hoverBgColor="hover:bg-[#fff]"
          borderStyle="border-[1px] border-[#DC3333]"
          fontStyle={inGameFinishButtonStyles["description"]}
          onClick={backScreen}
        >
          FECHAR
        </Button>
      </div>
    </div>
  );
}
