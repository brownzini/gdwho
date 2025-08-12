import Input from "@/components/Input";
import dataListStyles from "./styles";

import Button from "@/components/Button";
import SvgModel from "@/components/svg";
import { useScreen } from "@/contexts/screen/useScreen";
import { Dispatch, SetStateAction } from "react";

interface Props {
  value:string;
  setValue: Dispatch<SetStateAction<string>>;
}

export default function DataListArea({ value, setValue }:Props) {

  const { backScreen } = useScreen();

  return (
    <div className={dataListStyles["container"]}>
      <h2 className={dataListStyles["dataListTitle"]}>Lista de Dicas:</h2>
      <div className={dataListStyles["containerList"]}>
        <div className={dataListStyles["inputArea"]}>
          <Input
            width="w-full"
            height="h-[100%]"
            value={value}
            setValue={setValue}
            placeHolder="Ex: Usa cimento ..."
            borderStyle="border-none"
            fontColor="text-[#603A41]"
          />
          <div className={dataListStyles["iconContainer"]}>
            <Button cursor="cursor-normal">
              <SvgModel name="add" width="75%" height="75%" />
            </Button>
          </div>
        </div>
        <div className={dataListStyles["scrollArea"]}>
          <div className={dataListStyles["data"]}>
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
      <div className={dataListStyles["buttonsArea"]}>
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
        >
          <b className={dataListStyles["createButton"]}>CRIAR</b>
        </Button>
      </div>
    </div>
  );
}
