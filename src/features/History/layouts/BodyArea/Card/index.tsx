import CardItem from "./CardItem";

import { historyItemType } from "@/types/History";
import cardStyles from "./styles";

interface Props {
  date: string;
  items: historyItemType[];
}

export default function Card({ date, items }: Props) {
  return (
    <div
      data-name="history-card-container" 
      className={cardStyles["container"]}
    >
      <div 
        data-name="history-card-header-area" 
        className={cardStyles["header"]}
      >
        <div className={cardStyles["detail"]} />
        <div
          data-name="history-card-date-area"  
          className={cardStyles["date"]}
        >
          <h3
            data-name="history-card-date-title"   
            className={cardStyles["dateTitle"]}
          > 
            {date} 
          </h3>
        </div>
        <div className={cardStyles["detail"]} />
      </div>

      <div
        data-name="history-card-list-area" 
        className={cardStyles["cardsList"]}
      >
        {items.map((element, index) => {
          return (
            <CardItem
              key={index}
              type={element.type}
              quantity={element.quantity}
              field={element.field}
            />
          );
        })}
      </div>
    </div>
  );
}
