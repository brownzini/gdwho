import { Dispatch, SetStateAction } from "react";
import dataListStyles from "./styles";

import Item from "./Item";
import Input from "@/components/Input";
import SvgModel from "@/components/svg";
import Button from "@/components/Button";

import { useScreen } from "@/contexts/screen/useScreen";
import { DataInputType } from "@/types/userContextType";

interface Props {
  dataList: DataInputType[];
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  dataListValueError: string;
  setDataListValueError: Dispatch<SetStateAction<string>>;
  editValue: (key: string, index: number, newValue: string) => void;
  removeValueByIndex(index: number): void;
  addDataInList(): void;
}

export default function DataListArea({
  dataList,
  value,
  setValue,
  dataListValueError,
  setDataListValueError,
  editValue,
  removeValueByIndex,
  addDataInList,
}: Props) {
  const { backScreen } = useScreen();

  const borderContainerStyle = dataListValueError
    ? "1px dashed #dc362e"
    : "1px dashed #333124";
  const borderBottomStyle = dataListValueError
    ? "1px dashed #dc362e"
    : "1px dashed #333124";
  const textInputStyle = dataListValueError
    ? "text-[#dc362e]"
    : "text-[#333124]";

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
        >
          <Input
            width="w-full"
            height="h-full"
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
            <Button 
              cursor="cursor-normal" 
              onClick={addDataInList}
            >
              <SvgModel name="add" width="75%" height="75%" />
            </Button>
          </div>
        </div>
        <div
          data-name="data-list-scroll-area"
          className={dataListStyles["scrollArea"]}
        >
          {dataList.map((element, index) => {
            return (
              <Item
                key={index}
                index={index}
                value={element.value}
                editValue={editValue}
                hasError={element.hasError}
                removeValueByIndex={removeValueByIndex}
              />
            );
          })}
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
          onClick={() => console.log("salvo kkkkk")}
        >
          CRIAR
        </Button>
      </div>
    </div>
  );
}
