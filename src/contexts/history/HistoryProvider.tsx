"use client";

import { useState, type ReactNode } from "react";

import { HistoryContext } from "./HistoryContext";
import { HistoryCard, historyItemType } from "@/types/historyContextType";

import { getCurrentDate } from "@/utils/date";

export const HistoryProvider = ({ children }: { children: ReactNode }) => {
  const [historyCards, setHistoryCards] = useState<HistoryCard[]>([]);

  const addHistoryItem = (newItem: historyItemType) => {
    const currentDate = getCurrentDate();

    const defaultData = {
      date: currentDate,
      items: [],
    };
  
    const isNewDay = historyCards.length > 0;
    if (isNewDay) setHistoryCards((prevDataList) => [...prevDataList, defaultData]);
    
    setHistoryCards((prev) =>
      prev.map((card) =>
        card.date === currentDate
          ? { ...card, items: [...card.items, newItem] }
          : card
      )
    );
  };

  const value = { historyCards, addHistoryItem };

  return (
    <HistoryContext.Provider value={value}>{children}</HistoryContext.Provider>
  );
};
