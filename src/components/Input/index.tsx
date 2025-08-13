interface Props {
  max?: number;
  type?: string;
  width?: string;
  height?: string;
  borderStyle?: string;
  fontColor?: string;
  fontFamily?: string;
  fontSize?: string;
  placeHolder?: string;
  styler?: string;
  value: string;
  setValue: (value: string) => void;
  onClick?: () => void;
  removeData?: () => void;
}

export default function Input({
  max = 50,
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
  styler = "",
  onClick,
  removeData,
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
      onChange={(e) => setValue((e.target.value).slice(0, max))}
      onClick={onClick}
      onKeyDown={(e) => {
        if ((e.key === "Backspace" || e.key === "Delete") && removeData) {
          removeData();
        }
      }}
    />
  );
}
