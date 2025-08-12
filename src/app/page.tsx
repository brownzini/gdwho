"use client";

import { JSX, useMemo } from "react";
import { useScreen } from "@/contexts/screen/useScreen";

import InGameScreen from "@/screens/InGameScreen";
import HistoryScreen from "@/screens/HistoryScreen";
import EditGameScreen from "@/screens/EditGameScreen";
import DashboardScreen from "@/screens/DashboardScreen";
import CreateGameScreen from "@/screens/CreateGameScreen";
import GameSelectScreen from "@/screens/GameSelectScreen";
import ConfigurationScreen from "@/screens/ConfigurationScreen";

const homeStyles = {
  container: `
        w-[100%] h-[100vh] 
        flex items-center justify-center
    `,
  wrapper: `
        relative 
        w-[93%] h-[84%] 2xl:max-w-[1400px] 
        flex items-center justify-center 
        rounded-[25px] 
    `,
  mainArea: `
        w-[100%] h-[100%] max-h-[750px] 
        flex flex-col items-center justify-center
    `,
  detail: `
        w-[100%] h-[5%] 
        bg-[#F8F9FC] 
        rounded-tl-[25px] rounded-tr-[25px] sm:rounded-tr-[0px]
    `,
  content: `
        w-[100%] h-[100%] 
        bg-[#F8F9FC] 
        rounded-bl-[25px] 
        flex justify-center items-center
    `,
  screenSection: `
        bg-[#FFFFFF]
        w-[100%] h-[100%]
        rounded-bl-[25px] rounded-tr-[25px] lg:pb-5 xl:pb-0
    `,
  historyArea: `
        bg-[#F8F9FC] 
        w-[100%] h-[100%] md:w-[30%] md:h-[100%] max-h-[750px] z-12
        rounded-[25px] md:rounded-tl-[0px] md:rounded-bl-[0px] md:rounded-tr-[25px] md:rounded-br-[25px]
        hidden absolute md:relative top-[0px] left-[0px] md:flex 
  `,
};

const screenComponents: Record<string, JSX.Element> = {
  historyScreen: <HistoryScreen />,
  createGameScreen: <CreateGameScreen />,
  editGameScreen: <EditGameScreen />,
  configurationScreen: <ConfigurationScreen />,
  gameSelectScreen: <GameSelectScreen />,
  inGameScreen: <InGameScreen />,
};

export default function Home() {
  const { screenName } = useScreen();

  const renderedScreen = useMemo(() => {
    return screenComponents[screenName] ?? <DashboardScreen />;
  }, [screenName]);

  return (
    <div data-name="home-container" className={homeStyles["container"]}>
      <div data-name="home-wrapper" className={homeStyles["wrapper"]}>
        <div data-name="home-main-area" className={homeStyles["mainArea"]}>
          <div className={homeStyles["detail"]} />
          <div
            data-name="home-main-content"
            className={homeStyles["content"]}
          >
            <div
              data-name="home-main-screen-section"
              className={homeStyles["screenSection"]}
            >
              {renderedScreen}
            </div>
          </div>
        </div>
        {screenName !== "historyScreen" && (
          <div
            data-name="home-history-area"
            className={homeStyles["historyArea"]}
          >
            <HistoryScreen />
          </div>
        )}
      </div>
    </div>
  );
}
