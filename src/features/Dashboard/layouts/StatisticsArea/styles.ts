const statisticsStyles = {
  container: `
        w-[100%] h-[100%] max-h-[300px]
        flex flex-col sm:flex-row items-center justify-center gap-5
        pl-7 pr-7 pb-5 pl-10 pr-10
    `,
  cardsArea: `
        w-[100%] h-[100%] 
        flex flex-col items-center justify-center 
    `,
  description: `
        w-[100%] h-[25%]
        flex justify-start items-center
  `,
  descriptionTitle: `
        font-black font-["Inter"] text-[#311F35] text-[1.2rem] xl:text-[1.6rem]
  `,
  cardsWrapper: `
      w-[100%] h-[100%]
      flex justify-start items-center gap-3 sm:gap-1
  `,
  gameDetails: `
        w-[100%] sm:w-[50%] h-[100%] 
        flex flex-col items-center jusitfy-center sm:justify-end gap-2 2xl:gap-0
  `,
  buttonTitle: `
      w-[100%] h-[100%]
      hover:text-[#fff] text-[#623E6C] font-medium
      transition ease-in-out duration-500 
      grid items-center justify-center
  `,
};

export default statisticsStyles;
