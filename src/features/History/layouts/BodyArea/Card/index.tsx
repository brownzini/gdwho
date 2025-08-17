import { historyItemType } from "@/types/historyContextType";
import CardItem from "./CardItem";

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
          <h3 className={cardStyles["dateTitle"]}> 
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
              field={element.field}
            />
          );
        })}
      </div>
    </div>
  );
}
