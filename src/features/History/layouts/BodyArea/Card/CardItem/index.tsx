import HISTORY_CARD_COLOR from "@/constants/historyCardColors";
import { HistoryActionType } from "@/types/historyContextType";

interface Props {
  type: HistoryActionType;
  field: string;
}

export default function CardItem({ type, field }: Props) {

  const colors: Record<HistoryActionType, string> = {
    criou: HISTORY_CARD_COLOR.CREATE,
    listou: HISTORY_CARD_COLOR.LIST,
    atualizou: HISTORY_CARD_COLOR.UPDATE,
    removeu: HISTORY_CARD_COLOR.REMOVE,
    acertou: HISTORY_CARD_COLOR.WON,
  };

  const cardItemContainer =
    "fade-in-up flex justify-center items-center w-full h-[30%] 2xl:max-h-[4vh] text-center " +
    colors[type] +
    " p-1 rounded-[5px] font-semibold leading-[21px]";

  return (
    <div
      data-name="card-item-container" 
      className={cardItemContainer}
    >
      <h2>{type + " " + " " + field}</h2>
    </div>
  );
}
