import { ReactNode } from "react";
import screenTitleStyles from "./styles";
interface Props {
  children?: ReactNode;
}
export default function ScreenTitle({ children }: Props) {
  return (
    <div className={screenTitleStyles["container"]}>
      <h2 className={screenTitleStyles["title"]}>Criar Jogo:</h2>
      {children}
    </div>
  );
}
