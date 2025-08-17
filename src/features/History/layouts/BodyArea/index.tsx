"use client";

import bodyStyles from "./styles";

import Card from "./Card";
import { useHistory } from "@/contexts/history/useHistory";

export default function BodyArea() {
  const { historyCards } = useHistory();
  return (
    <div
      data-name="history-body-container"
      className={bodyStyles["container"]}
    >
      {historyCards.map((element, index) => {
        return (
          <Card
            key={index}
            date={element.date}
            items={element.items}
          />
        );
      })}
    </div>
  );
}
