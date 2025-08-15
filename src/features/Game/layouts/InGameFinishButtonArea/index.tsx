import Button from "@/components/Button";
import inGameFinishButtonStyles from "./styles";
import { useScreen } from "@/contexts/screen/useScreen";
import soundEffect from "@/components/SoundEffect";

interface Props {
  volume:number;
}

export default function InGameFinishButtonArea({ volume }:Props) {
  const { backScreen } = useScreen();

  const handleBack = () => {
      backScreen();
      soundEffect("out", volume);
  }
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
          onClick={handleBack}
        >
          FECHAR
        </Button>
      </div>
    </div>
  );
}
