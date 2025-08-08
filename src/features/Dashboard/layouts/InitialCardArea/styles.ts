const cardStyles = {
  container: `
        w-[100%]  h-[30%] sm:h-[40%] max-h-[250px]
        sm:pl-10 sm:pr-10
        pl-7 pr-7
    `,
  content: `
        w-[100%] h-[100%] sm:min-h-[230px]
        flex justify-center items-center
    `,
  cardWrapper: `
        w-[100%] h-[100%] max-w-[500px] 
        flex flex-col justify-center items-center gap-1 sm:gap-0 2xl:gap-2
        rounded-tl-[12px]
        rounded-bl-[12px]
        bg-[#FEF4E4]
        pl-2 sm:pl-5 2xl:pl-7
        border-[1px] border-t-[#d2953238] border-l-[#d2953238] border-b-[#d2953238] border-r-[#FEF4E4]
    `,
  cardHeader: `
        w-[100%] h-[5%] sm:h-[1%]
        flex flex-col justify-center items-start
    `,
  cardTitle: `
        font-["Exo_2"]
        text-[#250A29]
        font-black
        sm:text-[2rem]
        text-[1rem]
    `,
  cardBody: `
        w-[100%] h-[50%] sm:h-[57%] lg:h-[48%] xl:h-[50%]
        flex flex-col justify-center items-start
    `,
  CardSubTitle: `
        w-[75%] sm:w-[75%]
        font-["Roboto"] text-[#373540] text-left font-light text-[0.75rem] sm:text-[1.2rem] leading-[10px] sm:leading-[16px]
    `,
  cardFooter: `
        w-[100%] h-[25%]
        flex justify-start items-center
        pr-10
        gap-1 sm:gap-3
    `,
  playButtonFont: `
        font-["Inter"] text-[#428B8D] font-medium hover:text-[#fff] text-[0.7rem] sm:text-[1rem]
        w-[100%] h-[100%]
        grid items-center justify-center
        transition ease-in-out duration-500 
    `,
  githubButtonFont: `
        font-["Inter"] text-[#fff] font-medium text-[0.7rem] sm:text-[1rem]
        w-[100%] h-[100%]
        grid items-center justify-center

    `,
  cardImage: `
        w-[75%] h-[100%]
        bg-[#FEF4E4]
        border-[1px] 
        border-b-[#d2953238] border-l-[#FEF4E4]
        border-t-[#d2953238] border-r-[#d2953238] 
        rounded-tr-[12px] rounded-br-[12px]
        relative
    `,
};

export default cardStyles;
