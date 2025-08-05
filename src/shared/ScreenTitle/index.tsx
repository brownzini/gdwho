import screenTitleStyles from "./styles";

export default function ScreenTitle() {
  return (
    <div className={screenTitleStyles["container"]}>
      <h2 className={screenTitleStyles["title"]}>Criar Jogo:</h2>
      <h2>Entradas: 0</h2>
      <h2>Dicas: 0</h2>
    </div>
  );
}
