import statisticsStyles from "./styles";
import ItemCard from "./ItemCard";
import PersonalizedButton from "./PersonalizedButton";
import Button from "@/components/Button";

export default function Statistics() {
  return (
    <div
      data-name="dashboard-statistics-container" 
      className={statisticsStyles["container"]}
    >
      <div
        data-name="dashboard-statistics-cards-area" 
        className={statisticsStyles["cardsArea"]}
      >
        <div
          data-name="dashboard-statistics-description" 
          className={statisticsStyles["description"]}
        >
          <h2
            data-name="dashboard-statistics-card-description-title" 
            className={statisticsStyles["descriptionTitle"]}
          >
            Estatísticas
          </h2>
        </div>

        <div
          data-name="dashboard-statistics-cards-wrapper" 
          className={statisticsStyles["cardsWrapper"]}
        >
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
          <ItemCard 
            value={10} 
            iconName="created" 
            description="Jogos Criados" 
          />
        </div>
      </div>

      <div
        data-name="dashboard-statistics-game-details-area" 
        className={statisticsStyles["gameDetails"]}
      >
        <PersonalizedButton />
        <Button
          height="h-[50%] sm:h-[40%]"
          bgColor="bg-[#F5F5F5]"
          borderStyle="border-[1px] border-[#AB99B0]"
          hoverBgColor="hover:bg-[#1f0826]"
        >
          <p
            data-name="dashboard-statistics-my-game-label" 
            className={statisticsStyles["buttonTitle"]}
          >
            Meu Jogo
          </p>
        </Button>
        <Button
          display="flex md:hidden"
          height="h-[30%]"
          bgColor="bg-[#F5F5F5]"
          borderStyle="border-[1px] border-[#AB99B0]"
          hoverBgColor="hover:bg-[#1f0826]"
        >
          <p
            data-name="dashboard-statistics-history-label" 
            className={statisticsStyles["buttonTitle"]}
          >
            Histórico
          </p>
        </Button>
      </div>
    </div>
  );
}
