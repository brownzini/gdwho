import { Dispatch, SetStateAction } from "react";

import Item from "./Item";
import Input from "@/components/Input";
import SvgModel from "@/components/svg";
import Button from "@/components/Button";

import dataListStyles from "./styles";

import { useScreen } from "@/contexts/screen/useScreen";
import { DataInputType } from "@/types/userContextType";
import useLoading from "../../hooks/useLoading";

interface Props {
  createMode: boolean;
  dataList: DataInputType[];
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  dataListValueError: string;
  setDataListValueError: Dispatch<SetStateAction<string>>;
  editValue: (key: string, index: number, newValue: string) => void;
  removeValueByIndex(index: number): void;
  addDataInList(): void;
  handleSave?: () => Promise<void>;
  editDataListSubmit?: () => Promise<void>;
  setDataSelectedIndex?: Dispatch<SetStateAction<number>>;
  deleteDataListSubmit?: (id: number, index: number) => Promise<void>;
}

export default function DataListArea({
  createMode,
  dataList,
  value,
  setValue,
  dataListValueError,
  setDataListValueError,
  editValue,
  removeValueByIndex,
  addDataInList,
  handleSave,
  editDataListSubmit,
  setDataSelectedIndex,
  deleteDataListSubmit,
}: Props) {
  const { backScreen } = useScreen();
  const { loading, setLoading } = useLoading();

  const borderContainerStyle = dataListValueError
    ? "1px dashed #dc362e"
    : "1px dashed #333124";
  const borderBottomStyle = dataListValueError
    ? "1px dashed #dc362e"
    : "1px dashed #333124";
  const textInputStyle = dataListValueError
    ? "text-[#dc362e]"
    : "text-[#333124]";

  const handleSubmit = async () => {
    if (handleSave) {
      setLoading(true);
      await handleSave();
      setLoading(false);
    }
  };

  const handleDelete = async (id: number, index: number) => {
    if (createMode) {
      removeValueByIndex(index);
    } else if (deleteDataListSubmit) {
      setLoading(true);
      await deleteDataListSubmit(id, index);
      setLoading(false);
    }
  };

  return (
    <div
      data-name="data-list-container"
      className={dataListStyles["container"]}
    >
      <h2 className={dataListStyles["dataListTitle"]}>
        Lista de Dicas:
        <span className={dataListStyles["requiredMark"]}>*</span>
      </h2>
      <div
        data-name="data-list-container-list"
        className={dataListStyles["containerList"]}
        style={{ border: borderContainerStyle }}
        onClick={() => setDataListValueError("")}
      >
        {createMode && (
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
              <Button cursor="cursor-normal" onClick={addDataInList}>
                <SvgModel name="add" width="75%" height="75%" />
              </Button>
            </div>
          </div>
        )}
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
                removeValueByIndex={async () =>
                  await handleDelete(element.id, index)
                }
                editDataListSubmit={editDataListSubmit}
                setDataSelectedIndex={setDataSelectedIndex}
                loading={loading}
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
          height="h-[100%] sm:h-[64%] max-h-[50px]"
          bgColor="bg-[#939292]"
          hoverBgColor="hover:bg-[#504c4c]"
          onClick={backScreen}
          fontStyle={dataListStyles["backButtonDescription"]}
        >
          VOLTAR
        </Button>
        {createMode && (
          <Button
            height="h-[100%] sm:h-[64%] max-h-[50px]"
            bgColor="bg-[#C6518F] hover:bg-[#cc0f74]"
            fontStyle={dataListStyles["createButton"]}
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? (
              <SvgModel name="loading" width="50%" height="50%" color="#FFF" />
            ) : (
              "CRIAR"
            )}
          </Button>
        )}
      </div>
    </div>
  );
}
