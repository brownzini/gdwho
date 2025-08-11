import Image from "next/image";
import cardStyles from "./styles";
import { 
  DASHBOARD_CARD_SUBTITLE, 
  DASHBOARD_CARD_TITLE 
} from "@/constants/dashboardCard";
import Button from "@/components/Button";
import { useScreen } from "@/contexts/screen/useScreen";

export default function InitialCard() {

  const { nextScreen } = useScreen();

  return (
    <div 
      data-name="dashboard-card-container"
      className={cardStyles["container"]}
    >
      <div
        data-name="dashboard-card-content" 
        className={cardStyles["content"]}
      >
        <div
          data-name="dashboard-card-wrapper" 
          className={cardStyles["cardWrapper"]}
        >

          <div
            data-name="dashboard-card-header" 
            className={cardStyles["cardHeader"]}
          >
            <h1 className={cardStyles["cardTitle"]}>
              {DASHBOARD_CARD_TITLE}
            </h1>
          </div>

          <div 
            data-name="dashboard-card-body"
            className={cardStyles["cardBody"]}
          >
            <p className={cardStyles["CardSubTitle"]}>
               {DASHBOARD_CARD_SUBTITLE}
            </p>
          </div>

          <div
            data-name="dashboard-card-footer" 
            className={cardStyles["cardFooter"]}
          >
            <Button
              bgColor="!bg-[transparent]"
              hoverBgColor="hover:!bg-[#428B8D]"
              borderStyle="border-[1px] border-[#428B8D]"
              fontStyle={cardStyles["playButtonFont"]}
              onClick={() => nextScreen("gameSelectScreen")}
            >
              JOGAR
            </Button>
            <Button
              bgColor="!bg-[#33363C]"
              hoverBgColor="hover:!bg-[#0c0c0d]"
              borderStyle="border-[1px] border-[#33363C]"
              fontStyle={cardStyles["githubButtonFont"]}
            >
              GITHUB
            </Button>
          </div>
          
        </div>
        <div 
          data-name="dashboard-card-image-container"
          className={cardStyles["cardImage"]}
        >
          <Image
            fill
            priority 
            className="absolute w-[100%] h-[100%] object-cover"
            alt="image"
            src="/img/logo.png"
          />
        </div>
      </div>
    </div>
  );
}
