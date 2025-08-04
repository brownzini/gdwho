import statisticsStyles from "./styles";
import ItemCard from "./ItemCard";
import PersonalizedButton from "./PersonalizedButton";
import Button from "@/components/Button";

export default function Statistics() {
  return (
    <div className={statisticsStyles["container"]}>
      <div className={statisticsStyles["cardsArea"]}>
        
        <div className={statisticsStyles["description"]}>
          <h2 className={statisticsStyles["descriptionTitle"]}>Estatísticas</h2>
        </div>

        <div className={statisticsStyles["cardWrapper"]}>
          <ItemCard
            value={10}
            iconName="matchesTotal"
            description="Total de Partidas"
          />
          <ItemCard
            value={10}
            iconName="matchesWon"
            description="Partidas Ganhas"
          />
          <ItemCard
            value={10}
            iconName="lostMatches"
            description="Partidas Perdidas"
          />
        </div>

      </div>
      <div className={statisticsStyles["gameDetails"]}>
        <PersonalizedButton />
        <Button
          height="h-[40%]"
          bgColor="bg-[#F5F5F5]"
          borderStyle="border-[1px] border-[#AB99B0]"
          hoverBgColor="hover:bg-[#1f0826]"
        >
          <p className={statisticsStyles["myGamesButtonTitle"]}>Meus Jogos</p>
        </Button>
      </div>
    </div>
  );
}
