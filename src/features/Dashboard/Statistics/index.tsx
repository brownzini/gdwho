import statisticsStyles from "./styles";
import ItemCard from "./ItemCard";

export default function Statistics() {
  return (
    <div className={statisticsStyles["container"]}>
      <div className={statisticsStyles["cardsArea"]}>
        <div className={statisticsStyles["description"]}>
          <h2 className={statisticsStyles["descriptionTitle"]}>Estatísticas</h2>
        </div>

        <div className={statisticsStyles["cardWrapper"]}>
          <ItemCard value={10} iconName="matchesTotal" description="Total de Partidas" />
          <ItemCard value={10} iconName="matchesWon" description="Partidas Ganhas" />
          <ItemCard value={10} iconName="lostMatches" description="Partidas Perdidas" />
        </div>
      </div>
      <div className={statisticsStyles["gameDetails"]}></div>
    </div>
  );
}
