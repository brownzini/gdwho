const entryItemStyles = {
  wrapper: `flex justify-between  items-center gap-2`,
  input: `  text-[#112BCD] font-bold  whitespace-pre-wrap`,
  output: ` text-[#3C478B] font-bold  whitespace-pre-wrap`,
  label: (bgColor:string) => `
      ${bgColor}
      w-[12%] max-h-[25px] min-w-[70px] 
      flex justify-center items-center rounded-[30px] 
      font-black text-[#fff]
  `,
  action: `
      relative pl-9
      max-w-[100px] min-h-[25px] w-full h-[100%] 
      flex justify-center sm:justify-end items-center gap-3 
  `,
  iconArea: `flex justify-center items-center w-[100%] h-full`,
};

export default entryItemStyles;
