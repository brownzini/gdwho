import CardItem from "./CardItem";

import { historyItemType } from "@/types/History";
import cardStyles from "./styles";

interface Props {
  date: string;
  items: historyItemType[];
}

export default function HisotryCard({ date, items }: Props) {
  return (
    <div className={cardStyles["container"]}>

      <div className={cardStyles["header"]}>
        <div className={cardStyles["detail"]} />
        <div className={cardStyles["date"]}>
          <h3 className={cardStyles["dateTitle"]}> {date} </h3>
        </div>
        <div className={cardStyles["detail"]} />
      </div>

      <div className={cardStyles["body"]}>
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
