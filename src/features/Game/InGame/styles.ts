const inGameStyles = {
    container:`
        pb-5 sm:pb-10 relative
        w-full h-full
        flex flex-col justify-center items-center 
    `, 
    header:`
        w-[auto] h-[10%] p-1  
        flex flex-col justify-center items-center 
        absolute top-[-5%] z-19
        bg-[#fff]
        border-[1px] rounded-[5px] 
    `,
    headerTitle:`font-extralight text-[0.7rem] lg:text-[1rem]`,
    headerSubTitle:`
        font-bold font-["Inter"] text-left text-[0.7rem] leading-[16px] sm:leading-[20px]
    `,
    content:`
        lg:max-w-[750px] xl:max-w-[950px] 
        w-full h-full
        flex flex-col justify-center items-center pl-2 pr-2 sm:pl-5 sm:pr-5 gap-3
        bg-[#E9F5F3]
        rounded-[20px]
    `,
    bestGuesses:`
        w-full h-[37%] max-w-[979px]
        flex justify-start items-center gap-5 sm:gap-10 lg:gap-3
        hide-scrollbar overflow-x-scroll
    `,
    worstGuesses:`
        w-full h-[37%] max-w-[979px]
        flex justify-start items-center gap-5 sm:gap-10 lg:gap-3
        hide-scrollbar overflow-x-scroll
    `,
    guessInputArea:`
        w-full h-[16%]
        flex flex-col justify-center items-center gap-1
    `,
    guessInputLabel:`
        w-full h-[30%]
        flex justify-start items-center 
        italic font-extralight text-[#311F35]
    `,
    guessInputContent:`
        w-full h-[70%]
        flex justify-start items-center 
    `,
    buttonArea:`
        w-full h-[10%] 
        flex justify-center sm:justify-end items-center 
        sm:pr-10
    `,
    buttonWrapper:`
        p-1
        bg-[#fff] 
        w-[20%] min-w-[200px] h-full 
        rounded-tl-[10px] rounded-tr-[10px] 
        flex justify-center items-start
    `,
    buttonDescription:`
        w-full h-full 
        flex justify-center items-center 
        transition ease-in-out duration-500 
        text-[#fff] hover:text-[#DC3333] whitespace-nowrap 
    `,
};

export default inGameStyles;