import { Dispatch, SetStateAction } from "react";

interface Props {
  type?: string;
  width?: string;
  height?: string;
  borderStyle?: string;
  fontColor?: string;
  fontFamily?: string;
  fontSize?: string;
  placeHolder?: string;
  styler?:string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  onClick?: () => void;
}

export default function Input({
  type = "text",
  width = "w-[100%]",
  height = "h-[100%]",
  borderStyle = "border-none",
  fontColor = "",
  fontSize = "text-[1rem]",
  fontFamily = `font-["Inter"]`,
  placeHolder = "",
  value,
  setValue,
  styler="",
  onClick,
}: Props) {
  const styles = `
        ${width} ${height}
        ${fontColor} ${fontSize} ${fontFamily}
        rounded-[4px] ${borderStyle}
        outline-none pl-3
        ${styler}
    `;
  return (
    <input
      type={type}
      value={value}
      className={styles}
      placeholder={placeHolder}
      onChange={(e) => setValue(e.target.value)}
      onClick={onClick}
    />
  );
}
