import inGameHeaderStyles from "./styles";

interface Props {
    creatorUsername:string;
}

export default function InGameHeaderArea({ creatorUsername }:Props) {
  return (
    <div 
      data-name="in-game-header" 
      className={inGameHeaderStyles["container"]}
    >
      <h2 className={inGameHeaderStyles["title"]}>
        criado por: 
      </h2>
      <h2 className={inGameHeaderStyles["subTitle"]}>
        {creatorUsername}
      </h2>
    </div>
  );
}
