import { ReactNode } from "react";

interface Props {
  width?: string;
  height?: string;
  bgColor?: string;
  hoverBgColor?: string;
  borderRadius?: string;
  fontColor?: string;
  fontWeight?: string;
  fontFamily?: string;
  fontStyle?: string;
  iconName?: string | null;
  shadow?: string;
  borderStyle?: string;
  display?: string;
  cursor?: string;
  onClick?: () => void;
  children: ReactNode;
  disabled?:boolean;
}

export default function Button({
  width = "w-[100%]",
  height = "h-[100%]",
  bgColor = "!bg-[#ffff]",
  hoverBgColor = "hover:" + bgColor,
  borderRadius = "rounded-[10px]",
  fontColor = "text-[#000000]",
  fontWeight = "font-black",
  fontFamily = `font-["Inter"]`,
  fontStyle = "text-[1rem]",
  shadow = "shadow-none",
  borderStyle = "border-none",
  display = "",
  cursor = "cursor-pointer",
  onClick,
  children,
  disabled,
}: Props) {
  const containerStyle = `
          relative
          ${display}
          ${shadow}
          ${width} ${height} 
          ${bgColor} ${hoverBgColor} 
          ${fontStyle} ${fontFamily} ${fontColor} ${fontWeight} text-center
          ${borderRadius} ${borderStyle}
          flex justify-center items-center
          transition ease-in-out duration-500 
          ${cursor}
    `;
  const actionControl = (clickCount: number) => {
    if (clickCount > 1) {
      return;
    } else if (onClick) onClick();
  };
  return (
    <button 
      className={containerStyle} 
      onClick={(e) => actionControl(e.detail)}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
