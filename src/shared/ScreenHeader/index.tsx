import headerStyle from "./styles";
import SvgModel from "@/components/svg";
import Button from "@/components/Button";

import { useScreen } from "@/contexts/screen/useScreen";

interface Props {
  nameTitle: string;
  todayTitle: string;
}

export default function ScreenHeader({ nameTitle, todayTitle }: Props) {

  const { nextScreen } = useScreen();
  
  return (
    <div
      data-name="screen-header-container" 
      className={headerStyle["container"]}
    >
      <div
        data-name="screen-header-description" 
        className={headerStyle["description"]}
      >
        <h2
          data-name="screen-header-title"  
          className={headerStyle["title"]}
        >
          {nameTitle}
        </h2>
        <p className={headerStyle["subtitle"]}>
          {todayTitle}
        </p>
      </div>
      <div
        data-name="screen-header-actions"  
        className={headerStyle["actions"]}
      >
        <Button
          height="h-[40%]"
          bgColor="!bg-[#ffffff]"
          hoverBgColor="hover:!bg=[#ffff]"
          shadow="shadow-md"
          onClick={() => nextScreen("configurationScreen")}
        >
          <SvgModel name="settings" width="50%" height="50%" />
        </Button>
        <Button 
          height="h-[40%]" 
          bgColor="!bg-[#ffffff]" 
          shadow="shadow-md"
        >
          <SvgModel name="logout" width="30%" height="30%" />
        </Button>
      </div>
    </div>
  );
}
