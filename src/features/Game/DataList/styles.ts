const dataListStyles = {
  container: `
    w-[50%] h-[100%] 
    flex flex-col justify-start items-start gap-2
    `,
  dataListTitle: ` text-[#333124] font-black font-["Inter"] `,
  containerList: `
      w-[100%] h-[100%]
      border-[1px] border-[#333124] border-dashed rounded-[5px]
  `,
  inputArea:`
      w-full h-[16%] 
      flex justify-start items-center 
      border-b-[#333124] border-b-[1px] border-dashed
  `,
  iconContainer:`
      w-[25%] h-[100%] 
      flex justify-center items-center    
  `,
  scrollArea:`
      hide-scrollbar
      pr-3 pt-2 
      h-[84%] max-h-[250px] 
      flex flex-col justify-start items-start gap-10 
      overflow-y-scroll
  `,
  data:`
    w-full h-[auto] 
    justify-center items-center
  `,
  buttonsArea: `
      w-[100%] h-[30%]
      flex justify-center items-start gap-2
  `,
  backButton:` text-[#fff] font-medium text-[1rem] `,
  createButton:`text-[#fff] font-medium text-[1rem] `,
};
export default dataListStyles;
