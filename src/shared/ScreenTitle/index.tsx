import { ReactNode } from "react";
import screenTitleStyles from "./styles";
interface Props {
  title:string;
  children?: ReactNode;
}
export default function ScreenTitle({ title, children }: Props) {
  return (
    <div className={screenTitleStyles["container"]}>
      <h2 className={screenTitleStyles["title"]}>{title}</h2>
      {children}
    </div>
  );
}
