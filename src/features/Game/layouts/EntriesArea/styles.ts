const entriesStyles = {
  entryListContainer: `
      hide-scrollbar
      w-[100%] h-[93%] max-h-[200px]
      col-start-1 col-span-2 row-start-2 row-span-4
      overflow-y-scroll
  `,
  requiredMark:`text-extralight text-[#ff0000]`,
  response: `
      col-span-2 
      flex flex-col items-start justify-center gap-1
  `,
  responseLabel: `
      text-[0.7rem] sm:text-[1rem] text-[#2C2D33] font-["Inter"] font-black select-none
  `,
  entriesArea: `
      w-full h-[93%] 
      grid grid-cols-2 grid-rows-[1fr_1fr_1fr_auto_1fr] gap-2
  `,
  input: `
      col-span-2 
      flex flex-col items-start justify-center
  `,
  inputLabel: `
      text-[0.7rem] sm:text-[1rem] text-[#293536] font-["Inter"] font-black
  `,
  output: `
      col-span-2 
      flex flex-col items-start justify-center
  `,
  outputLabel: `
      text-[0.7rem] sm:text-[1rem] text-[#603A41] font-["Inter"] font-black
  `,
  level: `flex items-center justify-start gap-5`,
  levelWrapper: `flex items-center justify-start gap-2`,
  levelTitle: `
      text-[#2F2433] font-black leading-[16px] text-[0.7rem] sm:text-[1rem]
  `,
  iconStyle: `
       w-full h-[50%] 
       flex justify-center items-center
  `,
  entrieLabel: `font-light text-[#31B3B5] text-center`,
  entrieCount: `font-black text-[#31B3B5] text-center`,
  buttonArea: `
      h-[100%] 
      col-span-2 
      flex items-center justify-start
  `,
  buttonTitle: `
      text-[#fff] font-bold 
      w-full h-full 
      grid items-center justify-center
  `,
};
export default entriesStyles;
