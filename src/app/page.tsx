import CreateGameScreen from "@/screens/CreateGameScreen";
// import DashboardScreen from "@/screens/DashboardScreen";
import HistoryScreen from "@/screens/HistoryScreen";

export default function Home() {
  return (
    <div className="w-[100%] h-[100vh] flex items-center justify-center" >
      <div className="relative w-[93%] h-[84%] 2xl:max-w-[1400px] flex items-center justify-center rounded-[25px] ">
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
              <CreateGameScreen />
            </div>
          </div>
        </div>
        <div className="
          bg-[#F8F9FC] 
          w-[100%] h-[100%] md:w-[30%] md:h-[100%] max-h-[750px] z-12
          rounded-[25px] md:rounded-tl-[0px] md:rounded-bl-[0px] md:rounded-tr-[25px] md:rounded-br-[25px]
          hidden absolute md:relative top-[0px] left-[0px] md:flex 
        "
        >
          <HistoryScreen />
        </div>
      </div>
    </div>
  );
}
