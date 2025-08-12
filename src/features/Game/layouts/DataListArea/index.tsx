import Input from "@/components/Input";
import dataListStyles from "./styles";

import Button from "@/components/Button";
import SvgModel from "@/components/svg";
import { useScreen } from "@/contexts/screen/useScreen";
import { Dispatch, SetStateAction } from "react";

interface Props {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  handleValidation(): void;
  dataListValueError: string;
  setDataListValueError: Dispatch<SetStateAction<string>>;
}

export default function DataListArea({
  value,
  setValue,
  handleValidation,
  dataListValueError,
  setDataListValueError,
}: Props) {
  const { backScreen } = useScreen();

  const borderContainerStyle = dataListValueError ? "1px dashed #dc362e" : "1px dashed #333124";
  const borderBottomStyle = dataListValueError ? "1px dashed #dc362e" : "1px dashed #333124"; 
  const textInputStyle = dataListValueError ? "text-[#dc362e]" : "text-[#333124]";

  return (
    <div
      data-name="data-list-container"
      className={dataListStyles["container"]}
    >
      <h2 className={dataListStyles["dataListTitle"]}>Lista de Dicas:</h2>
      <div
        data-name="data-list-container-list"
        className={dataListStyles["containerList"]}
        style={{ border: borderContainerStyle }}
      >
        <div
          data-name="data-list-input-area"
          className={dataListStyles["inputArea"]}
          style={{ borderBottom: borderBottomStyle }}
          onClick={() => setDataListValueError("")}
        >
          <Input
            width="w-full"
            height="h-[100%]"
            value={value}
            setValue={setValue}
            placeHolder="Ex: Usa cimento ..."
            borderStyle="border-none"
            fontColor={textInputStyle}
            onClick={() => setDataListValueError("")}
          />
          <div
            data-name="data-list-icon-container"
            className={dataListStyles["iconContainer"]}
          >
            <Button cursor="cursor-normal">
              <SvgModel name="add" width="75%" height="75%" />
            </Button>
          </div>
        </div>
        <div
          data-name="data-list-scroll-area"
          className={dataListStyles["scrollArea"]}
        >
          <div data-name="data-list-data" className={dataListStyles["data"]}>
            <Input
              width="w-full"
              height="h-[100%]"
              value={value}
              setValue={setValue}
              borderStyle="border-none"
              fontSize="text-[0.93rem] sm:text-[1.2rem] xl:text-[1.6rem]"
              fontColor="text-[#8B803D] italic"
              fontFamily={`font-["Roboto"] `}
            />
          </div>
        </div>
      </div>
      <div
        data-name="data-list-button-area"
        className={dataListStyles["buttonsArea"]}
      >
        <Button
          height="h-[57%] sm:h-[64%]"
          bgColor="bg-[#939292]"
          hoverBgColor="hover:bg-[#504c4c]"
          onClick={backScreen}
          fontStyle={dataListStyles["backButtonDescription"]}
        >
          VOLTAR
        </Button>
        <Button
          height="h-[57%] sm:h-[64%]"
          bgColor="bg-[#C6518F]"
          hoverBgColor="hover:bg-[#cc0f74]"
          fontStyle={dataListStyles["createButton"]}
          onClick={handleValidation}
        >
          CRIAR
        </Button>
      </div>
    </div>
  );
}
