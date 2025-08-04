const personalizedButtonStyles = {
  container: `
        w-[100%] h-[30%] 
        relative 
        flex justify-center items-center
        transition ease-in-out duration-200 
        sm:opacity-75 hover:opacity-100
    `,
  buttonIcon: `
        absolute z-10 
        w-[20%] h-[70%] sm:h-[50%] 
        flex justify-center items-center 
        top-[-40%] sm:top-[-10%] left-[40%] 
        rounded-[100px]
    `,
  description: `
        text-[#992B08] 
        font-light
        font-["Inter"]
    `,
};

export default personalizedButtonStyles;
