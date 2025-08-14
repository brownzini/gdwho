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
  firstAction?: () => void;
  secondAction?: () => void;
  disabled?: boolean;
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
  firstAction,
  secondAction,
  disabled,
}: Props) {
  const styles = `
        ${width} ${height}
        ${fontColor} ${fontSize} ${fontFamily}
        rounded-[4px] ${borderStyle}
        outline-none pl-3
        ${styler}
    `;
  const handleActionClick = (pressedKey: string) => {
    const isDeleteMode = 
      (pressedKey === "Backspace" || pressedKey === "Delete") &&
      firstAction;
    if (isDeleteMode) firstAction();
    if (pressedKey === "Enter" && secondAction) secondAction();
  };
  return (
    <input
      type={type}
      value={value}
      className={styles}
      placeholder={placeHolder}
      onChange={(e) => setValue(e.target.value.slice(0, max))}
      onClick={onClick}
      onKeyDown={(e) => handleActionClick(e.key)}
      disabled={disabled}
    />
  );
}
