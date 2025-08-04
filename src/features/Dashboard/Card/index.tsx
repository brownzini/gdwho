import Button from "@/components/Button";
import cardStyles from "./styles";
import Image from "next/image";

export default function Card() {
  return (
    <div className={cardStyles["container"]}>
      <div className={cardStyles["content"]}>
        <div className={cardStyles["cardWrapper"]}>
            
          <div className={cardStyles["cardHeader"]}>
            <h1 className={cardStyles["cardTitle"]}>GDwho</h1>
          </div>

          <div className={cardStyles["cardBody"]}>
            <p className={cardStyles["CardSubTitle"]}>
              Este sistema foi desenvolvido para colocar em prática meus
              conhecimentos em machine learning e backend com spring boot
            </p>
          </div>

          <div className={cardStyles["cardFooter"]}>
            <Button
              bgColor="!bg-[transparent]"
              hoverBgColor="hover:!bg-[#428B8D]"
              borderStyle="border-[1px] border-[#428B8D]"
            >
              <p className={cardStyles["playButtonFont"]}>JOGAR</p>
            </Button>
            <Button
              bgColor="!bg-[#33363C]"
              hoverBgColor="hover:!bg-[#0c0c0d]"
              borderStyle="border-[1px] border-[#33363C]"
            >
              <p className={cardStyles["githubButtonFont"]}>GITHUB</p>
            </Button>
          </div>
        </div>
        <div className={cardStyles["cardImage"]}>
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
