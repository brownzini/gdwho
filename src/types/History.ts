export type HistoryActionType = "criou" | "listou" | "atualizou" | "removeu";

export type historyItemType = {
  type: HistoryActionType;
  quantity: number;
  field: string;
};

export type HistoryCard = {
  date: string;
  items: historyItemType[]
};
