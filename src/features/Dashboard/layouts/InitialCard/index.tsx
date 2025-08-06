import Button from "@/components/Button";
import cardStyles from "./styles";
import Image from "next/image";

export default function InitialCard() {
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
            <h1 className={cardStyles["cardTitle"]}>GDwho</h1>
          </div>

          <div 
            data-name="dashboard-card-body"
            className={cardStyles["cardBody"]}
          >
            <p
              data-name="dashboard-card-subTitle" 
              className={cardStyles["CardSubTitle"]}
            >
              Este sistema foi desenvolvido para colocar em prática meus
              conhecimentos em machine learning e backend com spring boot
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
            >
              <p 
                data-name="dashboard-card-play-button"
                className={cardStyles["playButtonFont"]}
              >
                JOGAR
              </p>
            </Button>
            <Button
              bgColor="!bg-[#33363C]"
              hoverBgColor="hover:!bg-[#0c0c0d]"
              borderStyle="border-[1px] border-[#33363C]"
            >
              <p
                data-name="dashboard-card-github-button"
                className={cardStyles["githubButtonFont"]}
              >
                GITHUB
              </p>
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
            src="/logo.png"
          />
        </div>
      </div>
    </div>
  );
}
