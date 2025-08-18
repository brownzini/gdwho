import initialCardStyles from "./styles";

export default function InitialCardPulseArea() {
  return (
    <div
      data-name="initial-card-container"
      className={initialCardStyles["container"]}
    >
      <div className={initialCardStyles["wrapper"]}>
        <div className={initialCardStyles["content"]}>
          <div className={initialCardStyles["contentSpace"]}>
            <div className={initialCardStyles["bigDetail"]} />
            <div className={initialCardStyles["groupContainer"]}>
              <div className={initialCardStyles["groupContent"]}>
                <div className={initialCardStyles["subDetail"]} />
                <div className={initialCardStyles["subDetail"]} />
              </div>
              <div className={initialCardStyles["bigDetail"]} />
                   <div className={initialCardStyles["groupContent"]}>
                <div className={initialCardStyles["subDetail"]} />
                <div className={initialCardStyles["subDetail"]} />
              </div>
            </div>
            <div className={initialCardStyles["groupContainer"]}>
              <div className={initialCardStyles["groupContent"]}>
                <div className={initialCardStyles["subDetail"]} />
                <div className={initialCardStyles["subDetail"]} />
              </div>
              <div className={initialCardStyles["bigDetail"]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
