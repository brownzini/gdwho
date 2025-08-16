const messageBoxStyles = {
    container:`
        openNotification 
        w-[93%] sm:w-[50%] max-w-[400px] h-[25%] 
        absolute z-100 
        flex justify-center items-center
    `,
    wrapper:`
        w-[93%] h-[50%] 
        bg-[#fff] 
        text-[#302c2c] 
        rounded-[7px] shadow-md 
        flex justify-start items-center
    `,
    detail:(bgColor:string) => `
        ${bgColor}
        w-[3%] h-full 
        rounded-tl-[7px] rounded-bl-[7px]
    `,
    content:`
        pl-5 
        w-[93%] h-full 
        flex flex-col justify-center items-start
    `,
    headerArea:`
        w-full h-[25%] 
        flex justify-between items-center
    `,
    title:`text-[#193106] text-["Inter"]`,
    bodyArea:`
        w-full h-[50%] 
        flex flex-col justify-center items-start 
    `,
    subTitle:(color:string) => `${color} font-black leading-[16px]`,
};

export default messageBoxStyles;