import authStyles from "./styles";

import ImageArea from "./layouts/ImageArea";
import TitleArea from "./layouts/TitleArea";
import FormArea from "./layouts/FormArea";
import IconsArea from "./layouts/IconsArea";
import { useState } from "react";

export default function Auth() {
  const [signInMode, setSignInMode] = useState<boolean>(true);
  const changeMode = () =>  setSignInMode(!signInMode);
  return (
    <div 
      data-name="auth-container" 
      className={authStyles["container"]}
    >
      <div 
        data-name="auth-wrapper" 
        className={authStyles["wrapper"]}
      >
        <ImageArea />
        <div 
          data-name="auth-content-area"
          className={authStyles["contentArea"]}
        >
          <TitleArea signInMode={signInMode} />
          <FormArea 
            signInMode={signInMode}
            changeMode={changeMode} 
          />
          <IconsArea />
        </div>
      </div>
    </div>
  );
}
