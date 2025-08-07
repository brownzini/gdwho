const headerStyle = {
  container: `
      w-[100%] h-[12%] 
      min-h-[100px] 
      flex justify-between items-center
      pl-7 pr-7 sm:pl-10 sm:pr-10
  `,
  description: `
     w-[100%] h-[100%]
     flex flex-col
     justify-center
     items-start 
  `,
  title: `
     font-black font-["Inter"] text-[#311F35] xl:text-[1.4rem]

  `,
  subtitle: `
     font-light font-["Inter"] text-[#4E4848] text-[0.84rem] sm:text-[1rem] xl:text-[1rem]
  `,
  actions: `
     min-w-[100px] max-w-[100px] w-[10%] h-[100%]
     flex 
     justify-center
     items-center
     sm:gap-3
     gap-1
  `,
};

export default headerStyle;
