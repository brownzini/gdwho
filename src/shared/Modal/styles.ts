const modalStyles = {
  container: `
        w-full h-full
        fixed inset-0 z-50 
        bg-black/70 
        flex flex-col justify-center items-center gap-3
    `,
  header: `
        bg-white
        rounded-[10px]
        relative pl-10 pr-10
        w-[75%] h-[10%]  md:w-[50%] md:h-[20%] 
        flex flex-row justify-center items-center
    `,
  headerWrapper: `
        w-full h-full
        flex flex-col justify-center items-start
    `,
  title: `
        text-[#311F35] font-black font-["Inter"] text-[1.6rem]
    `,
  backButtonArea: `
        w-[16%] h-full 
        flex justify-center items-center
    `,
  content: `
        p-10
        bg-[#fff] 
        rounded-[10px]
        w-[75%] md:w-[50%] h-[10%] 
        flex justify-center items-center
    `,
};

export default modalStyles;
