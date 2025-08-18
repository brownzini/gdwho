const itemCardPulseStyles = {
  container: `
        w-[50%] h-[10%] max-h-[250px] flex justify-center items-center
    `,
  wrapper: `
        mx-auto 
        h-full w-full 
 
        flex justify-center items-center
  `,
  content:`flex animate-pulse space-x-4 w-full`,
  contentSpace: `flex-1 space-y-6 py-1 `,
  bigDetail:`h-2 rounded bg-gray-200"`,
  groupContainer: `space-y-1`,
  groupContent:`grid grid-cols-3 gap-4`,
  subDetail:`col-span-2 h-2 rounded bg-gray-200`,
};

export default itemCardPulseStyles;
