import Button from "@/components/Button";
import correctAnswerBackButtonStyles from "./styles";
import { useScreen } from "@/contexts/screen/useScreen";

export default function CorrectAnswerBackButtonArea() {
  const { backScreen } = useScreen();
  return (
    <div
      data-name="in-game-button-area"
      className={correctAnswerBackButtonStyles["container"]}
    >
      <div
        data-name="in-game-button-wrapper"
        className={correctAnswerBackButtonStyles["wrapper"]}
      >
        <Button
          width="w-full min-w-[100px]"
          height="h-full min-h-[50px]"
          bgColor="bg-[#35A2CC]"
          hoverBgColor="hover:bg-[#fff]"
          borderStyle="hover:border-[1px] hover:border-[#35A2CC]"
          fontStyle={correctAnswerBackButtonStyles["description"]}
          onClick={backScreen}
        >
          VOLTAR AO INICIO
        </Button>
      </div>
    </div>
  );
}
