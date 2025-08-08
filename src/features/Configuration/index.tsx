import SoundArea from "./layouts/SoundArea";
import SelectColorsArea from "./layouts/SelectColorsArea";

import configurationStyles from "./styles";
import BackButton from "@/shared/BackButton";

export default function Configuration() {
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
        onClick={() => console.log("")}
      />
    </div>
  );
}
