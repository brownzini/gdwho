import Sound from "./layouts/Sound";
import SelectColors from "./layouts/SelectColors";

import configurationStyles from "./styles";
import Button from "@/components/Button";

export default function Configuration() {
  return (
    <div
      data-name="configuration-content"
      className={configurationStyles["content"]}
    >
      <Sound />
      <SelectColors />
      <div
        data-name="configuration-button-area" 
        className={configurationStyles["buttonArea"]}
      >
        <Button
          width="w-[20%] min-w-[50px]"
          height="h-[57%] sm:h-[75%]"
          bgColor="bg-[#939292]"
          hoverBgColor="hover:bg-[#504c4c]"
        >
          <p
            data-name="configuration-button-description" 
            className={configurationStyles["backButtonDescription"]}
          >
            voltar
          </p>
        </Button>
      </div>
    </div>
  );
}
