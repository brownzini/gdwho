const cardStyles = {
  container: `
        w-[100%] h-[40%]
        pl-24 pr-24
    `,
  content: `
        w-[100%] h-[100%] sm:min-h-[230px]
        flex justify-center items-center
    `,
  cardWrapper: `
        w-[100%] h-[100%]
        flex flex-col justify-center items-center
        rounded-tl-[12px]
        rounded-bl-[12px]
        bg-[#FEF4E4]
        pl-20
        border-[1px] border-t-[#d2953238] border-l-[#d2953238] border-b-[#d2953238] border-r-[#FEF4E4]
    `,
  cardHeader: `
        w-[100%] h-[1%]
        pt-5
        flex flex-col justify-center items-start
    `,
  cardTitle: `
        font-["Exo_2"]
        text-[#250A29]
        font-black
        text-[2rem]
    `,
  cardBody: `
        w-[100%] h-[50%]
        flex flex-col justify-center items-start
    `,
  CardSubTitle: `
        w-[75%]
        font-["Roboto"]
        text-[#373540]
        text-left
        font-light
    `,
  cardFooter: `
        w-[100%] h-[25%]
        flex justify-start items-center
        pr-10
        gap-3
    `,
  playButtonFont: `
        font-["Inter"]
        text-[#428B8D]
        font-medium
        hover:text-[#fff]
        w-[100%]
        h-[100%]
        grid items-center justify-center
        transition ease-in-out duration-500 
    `,
  githubButtonFont: `
        font-["Inter"]
        text-[#fff]
        font-medium
        w-[100%]
        h-[100%]
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
