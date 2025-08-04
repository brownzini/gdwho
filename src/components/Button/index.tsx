import { ReactNode } from "react";

interface Props {
  width?: string;
  height?: string;
  bgColor?: string;
  hoverBgColor?: string;
  borderRadius?: string;
  fontColor?: string;
  fontWeight?: string;
  iconName?: string | null;
  shadow?: string;
  borderStyle?:string;
  display?:string;
  children: ReactNode;
}

export default function Button({
  width = "w-[100%]",
  height = "h-[100%]",
  bgColor = "!bg-[#ffff]",
  hoverBgColor = "hover:"+bgColor,
  borderRadius = "rounded-[10px]",
  fontColor = "text-[#000000]",
  fontWeight = "font-black",
  shadow = "shadow-none",
  borderStyle="border-none",
  display="",
  children,
}: Props) {
  const containerStyle = `
          relative
          ${display}
          ${shadow}
          ${width} ${height} 
          ${bgColor} ${hoverBgColor} 
          ${fontColor} ${fontWeight} text-center
          ${borderRadius} ${borderStyle}
          flex justify-center items-center
          transition ease-in-out duration-500 
          cursor-pointer
    `;
  return <button className={containerStyle}>{children}</button>;
}
