import { ReactNode } from "react";
import screenTitleStyles from "./styles";
interface Props {
  title:string;
  children?: ReactNode;
}
export default function ScreenTitle({ title, children }: Props) {
  return (
    <div
      data-name="screen-title-container" 
      className={screenTitleStyles["container"]}
    >
      <h2
        data-name="screen-title-label"  
        className={screenTitleStyles["title"]}
      >
          {title}
      </h2>
      {children}
    </div>
  );
}
