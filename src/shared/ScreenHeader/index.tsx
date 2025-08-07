import Button from "@/components/Button";
import headerStyle from "./styles";
import SvgModel from "@/components/svg";

interface Props {
  nameTitle: string;
  todayTitle: string;
}

export default function ScreenHeader({ nameTitle, todayTitle }: Props) {
  return (
    <div className={headerStyle["container"]}>
      <div className={headerStyle["description"]}>
        <h2 className={headerStyle["title"]}>{nameTitle}</h2>
        <p className={headerStyle["subtitle"]}>{todayTitle}</p>
      </div>
      <div className={headerStyle["actions"]}>
        <Button
          height="h-[40%]"
          bgColor="!bg-[#ffffff]"
          hoverBgColor="hover:!bg=[#ffff]"
          shadow="shadow-md"
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
