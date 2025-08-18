const initialCardStyles = {
  container: `
        w-full h-[30%] sm:h-[40%] max-h-[250px]
    `,
  wrapper: `
        mx-auto 
        h-full w-full 
        rounded-md border border-[#c4c4c4] p-4 
        flex justify-center items-center
  `,
  content:`flex animate-pulse space-x-4 w-full`,
  contentSpace: `flex-1 space-y-6 py-1`,
  bigDetail:`h-2 rounded bg-gray-200"`,
  groupContainer: `space-y-3`,
  groupContent:`grid grid-cols-3 gap-4`,
  subDetail:`col-span-2 h-2 rounded bg-gray-200`,
};

export default initialCardStyles;
