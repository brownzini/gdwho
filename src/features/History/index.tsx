import BodyArea from "./layouts/BodyArea";
import HeaderArea from "./layouts/HeaderArea";
import historyStyles from "./styles";

export default function HistoryFeature() {
  return (
    <div
      data-name="history-screen-container"
      className={historyStyles["container"]}
    >
      <HeaderArea />
      <BodyArea   />
    </div>
  );
}
