"use client";

import statisticsStyles from "./styles";

import ItemCard from "./ItemCard";
import PersonalizedButton from "./PersonalizedButton";

import Button from "@/components/Button";
import { useScreen } from "@/contexts/screen/useScreen";
import { useUser } from "@/contexts/user/useUser";
import useStatistics from "../../hooks/useStatistics";

export default function StatisticsArea() {
  const { response } = useUser();
  const { nextScreen } = useScreen();

  const { matchesTotal, matchesWon, matchesCreated } = useStatistics();

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
            value={matchesTotal}
            iconName="matchesTotal"
            description="Total de Partidas"
          />
          <ItemCard
            value={matchesWon}
            iconName="matchesWon"
            description="Partidas Ganhas"
          />
          <ItemCard
            value={matchesCreated}
            iconName="created"
            description="Jogos Criados"
          />
        </div>
      </div>

      <div
        data-name="dashboard-statistics-game-details-area"
        className={statisticsStyles["gameDetails"]}
      >
        {response === "" && <PersonalizedButton />}
        {response && (
          <Button
            height="h-[50%] sm:h-[40%]"
            bgColor="bg-[#F5F5F5]"
            borderStyle="border-[1px] border-[#AB99B0]"
            hoverBgColor="hover:bg-[#8e4fa1]"
            fontStyle={statisticsStyles["buttonTitle"]}
            onClick={() => nextScreen("editGameScreen")}
          >
            Meu Jogo
          </Button>
        )}
        <Button
          height="h-[50%] sm:h-[40%]"
          bgColor="bg-[#F5F5F5]"
          borderStyle="border-[1px] border-[#AB99B0]"
          hoverBgColor="hover:bg-[#8e4fa1]"
          fontStyle={statisticsStyles["buttonTitle"]}
          onClick={() => nextScreen("")}
        >
          Como Funciona
        </Button>
        <Button
          display="flex md:hidden"
          height="h-[30%] max-h-[50px]"
          bgColor="bg-[#F5F5F5]"
          borderStyle="border-[1px] border-[#AB99B0]"
          hoverBgColor="hover:bg-[#1f0826]"
          fontStyle={statisticsStyles["buttonTitle"]}
          onClick={() => nextScreen("historyScreen")}
        >
          Histórico
        </Button>
      </div>
    </div>
  );
}
