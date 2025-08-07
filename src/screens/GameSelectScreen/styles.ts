const gameSelectScreenStyles = {
  container: `
        w-[100%] h-[100%]
        flex flex-col justify-center items-center gap-3 lg:gap-7 xl:gap-3
    `,
  wrapper: `
        w-[100%] h-[75%] 
        flex flex-col justify-center items-start gap-3
    `,
  backButtonArea: `
    w-full md:w-[180px] h-[20%] 
    pl-10  pr-10
    flex justify-center items-end md:items-center 
  `,
  modalContentArea:`
    w-full h-full 
    flex justify-center items-center gap-2
  `,
  buttonDescription:`font-medium text-[#fff] text-[0.75rem] sm:text-[1rem]`,
};

export default gameSelectScreenStyles;
