const imageAreaStyles = {
  container: `
        relative 
        bg-[#452670] 
        flex justify-center items-center 
        w-full sm:w-[50%] h-[50%] sm:h-full 
        rounded-tl-[25px] rounded-tr-[25px] sm:rounded-tr-[0px] sm:rounded-bl-[25px]
    `,
  imageContent: `
        w-full h-full 
        absolute shadow-md
        object-contain lg:object-cover 
        rounded-tl-[25px] rounded-tr-[25px] sm:rounded-bl-[25px] 
    `,
};

export default imageAreaStyles;
