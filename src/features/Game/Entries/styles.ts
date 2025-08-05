const entriesStyles = {
  entriesArea: `
      w-[100%] h-[93%] 
      grid grid-cols-2 grid-rows-[1fr_1fr_1fr_auto_1fr] gap-2
  `,
  response: `
    col-span-2 
    flex flex-col items-start justify-center gap-1
  `,
  responseLabel: `
    text-[0.7rem] sm:text-[1rem] text-[#2C2D33] font-["Inter"] font-black
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
  level: `flex items-center justify-start`,
  levelWrapper: `flex items-center justify-start gap-2`,
  levelTitle: `
    text-[#2F2433] font-black leading-[16px] text-[0.7rem] sm:text-[1rem]`,
  buttonArea: `
    h-[100%] 
    col-span-2 
    flex items-center justify-start
  `,
};
export default entriesStyles;
