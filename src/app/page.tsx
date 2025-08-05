import DashboardScreen from "@/screens/DashboardScreen";

export default function Home() {
  return (
    <div className="w-[100%] h-[100vh] flex items-center justify-center" >
      <div className=" w-[93%] h-[84%] 2xl:max-w-[1400px] flex items-center justify-center rounded-[25px] ">
        <div className=" w-[100%] h-[100%] max-h-[750px] flex flex-col items-center justify-center ">
          <div className="w-[100%] h-[5%] bg-[#F8F9FC] rounded-tl-[25px] rounded-tr-[25px] sm:rounded-tr-[0px]"></div>
          <div className="w-[100%] h-[100%] bg-[#F8F9FC] rounded-bl-[25px] flex justify-center items-center ">
            <div
              className="
              w-[100%] h-[100%]
              bg-[#FFFFFF]
              rounded-bl-[25px]
              rounded-tr-[25px]
            "
            >
              <DashboardScreen />
            </div>
          </div>
        </div>
        <div
          className="
          w-[30%] h-[100%] max-h-[750px]
          bg-[#F8F9FC] 
          rounded-tr-[25px] rounded-br-[25px]
          hidden md:flex 
        "
        ></div>
      </div>
    </div>
  );
}
