import itemCardPulseStyles from "./styles";

export default function ItemCardPulse() {
  return (
    <div
      data-name="initial-card-container"
      className={itemCardPulseStyles["container"]}
    >
      <div className={itemCardPulseStyles["wrapper"]}>
        <div className={itemCardPulseStyles["content"]}>
          <div className={itemCardPulseStyles["contentSpace"]}>
            <div className={itemCardPulseStyles["bigDetail"]} />
            <div className={itemCardPulseStyles["groupContainer"]}>
              <div className={itemCardPulseStyles["groupContent"]}>
                <div className={itemCardPulseStyles["subDetail"]} />
              </div>
            </div>
            <div className={itemCardPulseStyles["groupContainer"]}>
              <div className={itemCardPulseStyles["groupContent"]}>
                <div className={itemCardPulseStyles["subDetail"]} />
                <div className={itemCardPulseStyles["subDetail"]} />
              </div>
              <div className={itemCardPulseStyles["bigDetail"]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
