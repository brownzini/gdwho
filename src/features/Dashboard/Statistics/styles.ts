const statisticsStyles = {
  container: `
        w-[100%] h-[100%] 
        flex items-center justify-center gap-5
        pl-24 pr-24 pb-5
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
        font-black 
        font-["Inter"]
        text-[#311F35]
        text-[1.4rem]
  `,
  cardWrapper: `
      w-[100%] h-[100%]
      flex justify-start items-center gap-3
  `,
  gameDetails: `
        w-[50%] h-[100%] 
        flex flex-col items-center justify-end 
  `,
  myGamesButtonTitle: `
      w-[100%] h-[100%]
      hover:text-[#fff] text-[#623E6C] font-medium
      transition ease-in-out duration-500 
      grid items-center justify-center
  `,
};

export default statisticsStyles;
