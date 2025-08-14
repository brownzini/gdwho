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
  enterTyper?: string;
  alternativeAction?: () => void;
  disabled?:boolean;
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
  enterTyper,
  alternativeAction,
  disabled
}: Props) {
  const styles = `
        ${width} ${height}
        ${fontColor} ${fontSize} ${fontFamily}
        rounded-[4px] ${borderStyle}
        outline-none pl-3
        ${styler}
    `;
  const handleActionClick = (pressedKey:string, type?: string) => {
    if (type === "remove") {
      if ((pressedKey === "Backspace" || pressedKey === "Delete") && alternativeAction) {
           alternativeAction();
      }
    } else if(alternativeAction) {
        if (pressedKey === "Enter") {
           alternativeAction();
        }
    }
  };
  return (
    <input
      type={type}
      value={value}
      className={styles}
      placeholder={placeHolder}
      onChange={(e) => setValue(e.target.value.slice(0, max))}
      onClick={onClick}
      onKeyDown={(e) => handleActionClick(e.key, enterTyper)}
      disabled={disabled}
    />
  );
}
