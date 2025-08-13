const dataListStyles = {
  container: `
   w-full sm:w-[50%] h-[100%] 
    flex flex-col justify-start items-start gap-2
    `,
  dataListTitle: ` text-[#333124] font-black font-["Inter"] text-[0.75rem] sm:text-[1rem]`,
  containerList: `
      w-[100%] h-[100%]
      rounded-[5px]
  `,
  requiredMark:`text-extralight text-[#ff0000]`,
  inputArea:`
      w-full h-[30%] sm:h-[20%] md:h-[16%] 
      flex justify-start items-center 
  `,
  iconContainer:`
      w-[25%] h-[100%] 
      flex justify-center items-center    
  `,
  scrollArea:`
      hide-scrollbar
      pr-3 pt-2 
      h-[84%] max-h-[75px] sm:max-h-[250px] 
      flex flex-col justify-start items-start gap-1 
      overflow-y-scroll
  `,
  data:`
    w-full h-[auto] 
    justify-center items-center
  `,
  buttonsArea: `
      w-[100%] h-[50%] md:h-[25%]
      flex justify-center items-start gap-2
  `,
  backButtonDescription:` text-[#fff] font-medium text-[1rem] `,
  createButton:`text-[#fff] font-medium text-[1rem] `,
};
export default dataListStyles;
