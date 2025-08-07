const cardStyles = {
    container: `
          relative 
          w-[30%] h-[100%] 
          flex justify-center items-center
    `,
    colorPickArea: `
          absolute top-[8.4%] sm:top-[5%] 
          rounded-[200px] 
          w-[14%] h-[25%] min-w-[20px] max-h-[20px] sm:min-w-[30px] sm:max-h-[30px] md:max-w-[10px]
          flex justify-center items-center
    `,
    cardBodyArea: `
          select-none
          w-full h-[70%] max-w-[320px] max-h-[160px] shadow-md
          flex justify-center items-center
          rounded-[10px]
    `,
    cardDescription: `font-light font-["Inter"] text-[0.84rem] sm:text-[1rem] text-center`,
};

export default cardStyles;
