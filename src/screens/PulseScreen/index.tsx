import pulseScreenStyles from "./styles";
import ItemCardPulse from "@/features/Dashboard/layouts/StatisticsArea/ItemCardPulse";
import InitialCardPulseArea from "@/features/Dashboard/layouts/InitialCardPulseArea";

export default function PulseScreen() {
  
  return (
    <div
      data-name="dashboard-screen-container"
      className={pulseScreenStyles["container"]}
    >
     <InitialCardPulseArea />
      <div
        data-name="dashboard-statistics-container"
        className={pulseScreenStyles["container"]}
      >
        <div
          data-name="dashboard-statistics-cards-area"
          className={pulseScreenStyles["cardsArea"]}
        >
          <div
            data-name="dashboard-statistics-cards-wrapper"
            className={pulseScreenStyles["cardsWrapper"]}
          >
            <ItemCardPulse />
            <ItemCardPulse />
            <ItemCardPulse />
          </div>
        </div>
      </div>
    </div>
  );
}
