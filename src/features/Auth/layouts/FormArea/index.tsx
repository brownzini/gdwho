import formAreaStyles from "./styles";

import Input from "@/components/Input";
import Button from "@/components/Button";
import { Dispatch, SetStateAction } from "react";

interface Props {
  signInMode: boolean;
  changeMode: () => void;
  username: string;
  setUsername: (username: string) => void;
  password: string;
  setPassword: (password: string) => void;
  repassword: string;
  setRePassword: (repassword: string) => void;
  handleSubmit: () => Promise<void>;
  usernameError:boolean;
  passwordError:boolean;
  repasswordError:boolean;
  setUsernameError: Dispatch<SetStateAction<boolean>>;
  setPasswordError: Dispatch<SetStateAction<boolean>>;
  setRepasswordError: Dispatch<SetStateAction<boolean>>;
}

export default function FormArea({
  signInMode,
  changeMode,
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
}: Props) {
  const butonDescription = signInMode ? "ENTRAR" : "CADASTRAR";
  const buttonColor = signInMode ? "bg-[#452670]" : "bg-[#C6518F]";
  const buttonBorder = signInMode
    ? "border-[#452670] border-[1px]"
    : "border-[#C6518F] border-[1px]";

  const detailText = signInMode ? "Criar nova conta" : "Ja tenho uma conta";
  const detailTextColor = signInMode
    ? "hover:text-[#452670]"
    : "hover:text-[#C6518F]";

  const usernameFieldErrorStyle = usernameError
    ? "border-[1px]  border-[#dc362e] text-[#dc362e] "
    : "border-[1px]  border-[#C4C4C4] text-[#424242] ";
  const passwordFieldErrorStyle = passwordError
    ? "border-[1px]  border-[#dc362e] text-[#dc362e] "
    : "border-[1px]  border-[#C4C4C4] text-[#424242] ";
  const rePasswordFieldErrorStyle = repasswordError
    ? "border-[1px]  border-[#dc362e] text-[#dc362e] "
    : "border-[1px]  border-[#C4C4C4] text-[#424242] ";

  return (
    <div
      data-name="auth-form-container"
      className={formAreaStyles["container"]}
    >
      <div
        data-name="auth-username-area"
        className={formAreaStyles["usernameArea"]}
      >
        <b className={formAreaStyles["usernameText"]}>Nome:</b>
        <Input
          type="text"
          height="h-[100%] max-h-[50px]"
          value={username}
          setValue={setUsername}
          placeHolder="nome do seu usuario"
          borderStyle={usernameFieldErrorStyle}
          onClick={() => setUsernameError(false)}
        />
      </div>
      <div
        data-name="auth-password-area"
        className={formAreaStyles["passwordArea"]}
      >
        <b className={formAreaStyles["passwordText"]}>Senha:</b>
        <Input
          type="password"
          height="h-[100%] max-h-[50px]"
          value={password}
          setValue={setPassword}
          placeHolder="sua senha ... "
          borderStyle={passwordFieldErrorStyle}
          onClick={() => setPasswordError(false)}
          secondAction={handleSubmit}
        />
      </div>
      {!signInMode && (
        <div
          data-name="auth-repassword-area"
          className={formAreaStyles["passwordArea"]}
        >
          <b className={formAreaStyles["passwordText"]}>Repetir senha:</b>
          <Input
            type="password"
            height="h-[100%] max-h-[50px]"
            value={repassword}
            setValue={setRePassword}
            placeHolder="sua senha novamente ... "
            borderStyle={rePasswordFieldErrorStyle}
            onClick={() => setRepasswordError(false)}
          />
        </div>
      )}
      <div
        data-name="auth-button-area"
        className={formAreaStyles["buttonArea"]}
      >
        <Button
          bgColor={buttonColor}
          hoverBgColor="hover:bg-[#fff]"
          borderStyle={buttonBorder}
          fontStyle={formAreaStyles["buttonDescription"](detailTextColor)}
          onClick={handleSubmit}
        >
          {butonDescription}
        </Button>
      </div>
      <div
        data-name="auth-detail-area"
        className={formAreaStyles["detailArea"]}
      >
        <Button
          width="w-[auto]"
          fontStyle={formAreaStyles["detailText"]}
          onClick={changeMode}
        >
          {detailText}
        </Button>
      </div>
    </div>
  );
}
