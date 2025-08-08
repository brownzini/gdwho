const iconsStyles = {
  container: `
        w-full h-[20%] 
        flex justify-center items-center gap-10
        border-t-[1px] border-b-[0px] border-r-[0px] border-l-[0px] border-t-[#c4c4c4] 
    `,
  content: (bgColor: string) => `
        ${bgColor} 
        rounded-[100%] 
        cursor-pointer relative
        w-[10%] h-[50%]
        min-w-[25px] min-h-[25px] max-h-[10px]
        sm:min-w-[50px] sm:min-h-[50px] sm:max-w-[50px] 2xl:max-w-[250px] 2xl:max-h-[70px]
        flex justify-center items-center
        transition ease-in-out duration-400
        opacity-70 hover:opacity-100
    `,
};

export default iconsStyles;
