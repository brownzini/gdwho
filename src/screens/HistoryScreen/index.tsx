import Body from "@/features/History/Body";
import Header from "@/features/History/Header";

import historyScreenStyles from "./styles";

export default function HistoryScreen() {
    return (
        <div
          data-name="history-screen-container" 
          className={historyScreenStyles["container"]}
        >
            <Header />
            <Body />
        </div>
    )
}