import headerStyle from "./styles";
import SvgModel from "@/components/svg";
import Button from "@/components/Button";

import { useScreen } from "@/contexts/screen/useScreen";
import { getDateName } from "@/utils/date";

interface Props {
  nameTitle: string;
}

export default function ScreenHeader({ nameTitle }: Props) {

  const date = getDateName();
  const { nextScreen } = useScreen();
  const { logoutScreen } = useScreen();
  
  return (
    <div
      data-name="screen-header-container" 
      className={headerStyle["container"]}
    >
      <div
        data-name="screen-header-description" 
        className={headerStyle["description"]}
      >
        <h2 className={headerStyle["title"]}>
          Olá {nameTitle}
        </h2>
        <p className={headerStyle["subtitle"]}>
          {date}
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
          onClick={logoutScreen}
        >
          <SvgModel name="logout" width="30%" height="30%" />
        </Button>
      </div>
    </div>
  );
}
