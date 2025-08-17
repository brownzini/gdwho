export type HistoryActionType = "criou" | "listou" | "atualizou" | "removeu" | "acertou";

export type historyItemType = {
  type: HistoryActionType;
  field: string;
};

export type HistoryCard = {
  date: string;
  items: historyItemType[];
};

export type HistoryContextType = {
    historyCards: HistoryCard[];
    addHistoryItem: (newItem: historyItemType) => void;
}
