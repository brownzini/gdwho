import { useState } from "react";

import formAreaStyles from "./styles";

import Input from "@/components/Input";
import Button from "@/components/Button";

interface Props {
  signInMode:boolean;
  changeMode: () => void;
}

export default function FormArea({ signInMode, changeMode }:Props) {

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repassword, setRePassword] = useState<string>("");

  const butonDescription = (signInMode) ? "ENTRAR" : "CADASTRAR";
  const buttonColor = (signInMode)  ? "bg-[#452670]" : "bg-[#C6518F]";
  const buttonBorder = (signInMode) ? "border-[#452670] border-[1px]" : "border-[#C6518F] border-[1px]";

  const detailText = (signInMode) ? "Criar nova conta" : "Ja tenho uma conta";
  const detailTextColor = (signInMode) ? "hover:text-[#452670]" : "hover:text-[#C6518F]";

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
          borderStyle="border-[1px] border-[#C4C4C4]"
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
          borderStyle="border-[1px] border-[#C4C4C4]"
          placeHolder="sua senha ... "
        />
      </div>
      {(!signInMode) && <div
        data-name="auth-repassword-area"
        className={formAreaStyles["passwordArea"]}
      >
        <b className={formAreaStyles["passwordText"]}>Repetir senha:</b>
        <Input
          type="password"
          height="h-[100%] max-h-[50px]"
          value={repassword}
          setValue={setRePassword}
          borderStyle="border-[1px] border-[#C4C4C4]"
          placeHolder="sua senha novamente ... "
        />
      </div>}
      <div
        data-name="auth-button-area"
        className={formAreaStyles["buttonArea"]}
      >
        <Button
          bgColor={buttonColor}
          hoverBgColor="hover:bg-[#fff]"
          borderStyle={buttonBorder}
        >
          <p className={formAreaStyles["buttonDescription"](detailTextColor)}>
             {butonDescription}
          </p>
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
