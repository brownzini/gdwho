import Input from "@/components/Input";
import itemStyles from "./styles";
import { Dispatch, SetStateAction } from "react";

interface Props {
  index: number;
  value: string;
  editValue(key: string, index: number, newValue: string): void;
  hasError?: boolean;
  removeValueByIndex(index: number): void;
  editDataListSubmit?: () => Promise<void>;
  setDataSelectedIndex?: Dispatch<SetStateAction<number>>;
  loading:boolean;
}

export default function Item({
  index,
  value,
  editValue,
  hasError,
  removeValueByIndex,
  editDataListSubmit,
  setDataSelectedIndex,
  loading,
}: Props) {
  const colorStyle = hasError
    ? "text-[#dc362e] italic"
    : "text-[#8B803D] italic";

  const handleEditValue = (name: string) => {
    editValue("value", index, name);
  };

  const removeData = () => {
    if (!value) removeValueByIndex(index);
  };

  const handleSetValue = async () => {
    if (editDataListSubmit) {
        await editDataListSubmit();
    }
  };

  return (
    <div data-name="data-list-data" className={itemStyles["data"]}>
      <Input
        max={100}
        width="w-full"
        height="h-full"
        value={value}
        setValue={handleEditValue}
        borderStyle="border-none"
        fontFamily={`font-["Roboto"] `}
        firstAction={removeData}
        fontColor={colorStyle}
        fontSize="text-[0.93rem] sm:text-[1.2rem] xl:text-[1.6rem]"
        secondAction={handleSetValue}
        onClick={() => setDataSelectedIndex && setDataSelectedIndex(index)}
        disabled={loading}
      />
    </div>
  );
}
