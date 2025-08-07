const correctAnswerStyles = {
  container: `
        pb-5 sm:pb-10 relative
        w-full h-full
        flex flex-col justify-center items-center 
    `,
  wrapper: `
        serra
        lg:max-w-[750px] xl:max-w-[950px] 
        w-full h-full
        flex flex-col justify-center items-center pl-2 pr-2 sm:pl-5 sm:pr-5 gap-3
        bg-[#FA9E20]
        rounded-[20px]
    `,
  responseArea:`
        float shadow-2xl
        w-[75%] sm:w-[50%] h-[75%] 
        flex flex-col justify-center items-center 
        rounded-tr-[25px] rounded-tl-[25px] 
  `,
  imageArea:`
        relative
        w-full h-[75%] f
        lex justify-center items-center 
  `,
  responseDescription:`
        bg-[#ffffff] 
        w-full h-[50%] 
        rounded-br-[10px] rounded-bl-[10px] 
        flex flex-col justify-center items-center 
  `,
  responseDescriptionLabel:`font-["Luckiest_Guy"] text-[2rem] text-[#1E2E4C] leading-7 text-center`,
  buttonArea: `
        w-full h-[10%] 
        flex justify-center sm:justify-end items-center 
        sm:pr-10
    `,
  buttonWrapper: `
        p-1
        bg-[#fff] 
        w-[20%] min-w-[200px] h-full 
        rounded-tl-[10px] rounded-tr-[10px] 
        flex justify-center items-start
    `,
  buttonDescription: `
        w-full h-full 
        flex justify-center items-center 
        transition ease-in-out duration-500 
        text-[#fff] hover:text-[#35A2CC] whitespace-nowrap 
    `,
};

export default correctAnswerStyles;
