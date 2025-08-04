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
  children: ReactNode;
}

export default function ButtonIcon({
  width = "w-[100%]",
  height = "h-[100%]",
  bgColor = "!bg-[#ffff]",
  hoverBgColor = "hover:!bg-[#ffff]",
  borderRadius = "rounded-[10px]",
  fontColor = "text-[#000000]",
  fontWeight = "font-black",
  children,
}: Props) {
  const containerStyle = `
          relative shadow-md
          ${width} ${height} 
          ${bgColor} ${hoverBgColor} 
          ${borderRadius} 
          ${fontColor} ${fontWeight} text-center
          flex justify-center items-center
          transition ease-in-out duration-500 
          cursor-pointer
    `;
  return <button className={containerStyle}>{children}</button>;
}
