import SoundArea from "./layouts/SoundArea";
import SelectColorsArea from "./layouts/SelectColorsArea";

import configurationStyles from "./styles";
import BackButton from "@/shared/BackButton";
import { useScreen } from "@/contexts/screen/useScreen";

export default function Configuration() {
  
  const { backScreen } = useScreen();

  return (
    <div
      data-name="configuration-content"
      className={configurationStyles["content"]}
    >
      <SoundArea />
      <SelectColorsArea />
      <BackButton
        xPosition="start"
        yPosition="end"
        onClick={backScreen}
      />
    </div>
  );
}
