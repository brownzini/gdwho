import HistoryBody from "@/features/History/HistoryBody";
import HistoryHeader from "@/features/History/HistoryHeader";

import historyScreenStyles from "./styles";

export default function HistoryScreen() {
    return (
        <div
          data-name="history-screen-container" 
          className={historyScreenStyles["container"]}
        >
            <HistoryHeader />
            <HistoryBody   />
        </div>
    )
}