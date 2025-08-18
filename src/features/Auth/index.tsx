import authStyles from "./styles";

import ImageArea from "./layouts/ImageArea";
import TitleArea from "./layouts/TitleArea";
import FormArea from "./layouts/FormArea";
import IconsArea from "./layouts/IconsArea";
import { useState } from "react";
import useForm from "./hooks/useForm";

export default function Auth() {

  const [signInMode, setSignInMode] = useState<boolean>(true);
  const changeMode = () => setSignInMode(!signInMode);
  
  const {
    username,
    setUsername,
    password,
    setPassword,
    repassword,
    setRePassword,
    handleSubmit,
    usernameError,
    passwordError,
    repasswordError,
    setUsernameError,
    setPasswordError,
    setRepasswordError,
  } = useForm({ signInMode });

  return (
    <div data-name="auth-container" className={authStyles["container"]}>
      <div data-name="auth-wrapper" className={authStyles["wrapper"]}>
        <ImageArea />
        <div
          data-name="auth-content-area"
          className={authStyles["contentArea"]}
        >
          <TitleArea signInMode={signInMode} /> 
          <FormArea
            signInMode={signInMode}
            changeMode={changeMode}
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            repassword={repassword}
            setRePassword={setRePassword}
            handleSubmit={handleSubmit}
            usernameError={usernameError}
            passwordError={passwordError}
            repasswordError={repasswordError}
            setUsernameError={setUsernameError}
            setPasswordError={setPasswordError}
            setRepasswordError={setRepasswordError}
          />
          <IconsArea />
        </div>
      </div>
    </div>
  );
}
