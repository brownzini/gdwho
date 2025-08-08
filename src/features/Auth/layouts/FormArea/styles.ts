const formAreaStyles = {
  container: `
        w-full h-[55%] 
        flex flex-col justify-center items-start gap-3
    `,
  usernameArea: `
        w-full h-[50%] 
        flex flex-col justify-center items-start
    `,
  usernameText: `text-[#151817] font-extralight 2xl:text-[1.4rem]`,
  passwordArea: `
        w-full h-[50%] 
        flex flex-col justify-center items-start
    `,
  passwordText: `text-[#151817] font-extralight 2xl:text-[1.4rem]`,
  buttonArea: `w-full h-[50%] max-h-[50px] 2xl:max-h-[70px] flex justify-center items-center`,
  buttonDescription: (color:string) =>  `
        text-[#ffffff] font-medium ${color} 2xl:text-[1.4rem]
        transition ease-in-out duration-200 
        w-full h-full 
        grid items-center justify-center
    `,
  detailArea: `
        w-full h-[25%] 
        flex justify-start items-center
    `,
  detailText: `font-["Inter"] font-light italic hover:text-gray-500`,
};

export default formAreaStyles;
