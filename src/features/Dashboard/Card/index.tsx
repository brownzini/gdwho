import cardStyles from "./styles";

export default function Card() {
  return (
    <div className={cardStyles["container"]}>
      <div className={cardStyles["content"]}>
        <div className={cardStyles["cardWrapper"]}>

          <div className={cardStyles["cardHeader"]}>
            <h1 className={cardStyles["cardTitle"]}>GDwho</h1>
          </div>

          <div className={cardStyles["cardBody"]}>
            <p className={cardStyles["CardSubTitle"]}>
              Este sistema foi desenvolvido para colocar em prática meus
              conhecimentos em machine learning e backend com spring boot
            </p>
          </div>

          <div className={cardStyles["cardFooter"]}>
            
          </div>

        </div>
        <div className={cardStyles["cardImage"]}></div>
      </div>
    </div>
  );
}
