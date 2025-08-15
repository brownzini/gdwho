import SoundArea from "./layouts/SoundArea";
import SelectColorsArea from "./layouts/SelectColorsArea";

import configurationStyles from "./styles";
import BackButton from "@/shared/BackButton";
import { useScreen } from "@/contexts/screen/useScreen";
import { useUser } from "@/contexts/user/useUser";

export default function Configuration() {
  
  const { backScreen } = useScreen();
  const { volume, setVolume, colors, setColors } = useUser();

  return (
    
    <div
      data-name="configuration-content"
      className={configurationStyles["content"]}
    >
      <SoundArea volume={volume} setVolume={setVolume} />
      <SelectColorsArea colors={colors} setColors={setColors} />
      <BackButton
        xPosition="start"
        yPosition="end"
        onClick={backScreen}
      />
    </div>
  );
}
