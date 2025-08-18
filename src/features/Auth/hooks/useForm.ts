import { useState } from "react";

import { useMessageBox } from "@/contexts/messageBox/useMessageBox";

import {
  invalidPassword,
  invalidRepassword,
  invalidUsername,
} from "@/services/auth/businessRuleValidations-service";
import { auth } from "@/services/auth/api-service";
import { setAuthToken } from "@/utils/storage/token-storage";
import { useRouter } from "next/navigation";
import { useUser } from "@/contexts/user/useUser";

interface Props {
  signInMode: boolean;
}

export default function useForm({ signInMode }: Props) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repassword, setRePassword] = useState<string>("");

  const [usernameError, setUsernameError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [repasswordError, setRepasswordError] = useState<boolean>(false);

  const router = useRouter();
  const { dispatchMessageBox } = useMessageBox();
  const { setup } = useUser();

  async function handleSubmit() {
    const readyToSend = fieldsValidation();
    const messageModel = {
      title: signInMode ? "ERRO NO LOGIN:" : "ERRO NO REGISTRO:",
      subTitle: signInMode
        ? "Senha errada ou usuario não existe"
        : "Não foi possivel cadastrar, tente novamente",
    };
    const actiontype = signInMode ? "login" : "register";
    if (readyToSend) {
      if (actiontype === "login")
        await sendLoginToApi(actiontype, messageModel);
      else await sendRegisterToApi(actiontype, messageModel);
    }
  }

  async function sendLoginToApi(
    actiontype: "login" | "register",
    messageModel: {
      title: string;
      subTitle: string;
    }
  ) {
    await auth({ actiontype, username, password })
      .then((resp) => {
        if (resp.data.token) {
          setAuthToken(resp.data.token);
          setup({ data: resp.data });
          router.push("/");
        } else {
          dispatchMessageBox(
            "error",
            messageModel.title,
            messageModel.subTitle
          );
        }
      })
      .catch(() => {
        dispatchMessageBox("error", messageModel.title, messageModel.subTitle);
      });
  }

  async function sendRegisterToApi(
    actiontype: "login" | "register",
    messageModel: {
      title: string;
      subTitle: string;
    }
  ) {
    await auth({ actiontype, username, password })
      .then((resp) => {
        setAuthToken(resp.data.token);
        setup({ data: resp.data });
        router.push("/");
      })
      .catch(() => {
        dispatchMessageBox("error", messageModel.title, messageModel.subTitle);
      });
  }

  function fieldsValidation() {
    const notValidUsername = invalidUsername(true, username);
    if (notValidUsername) setUsernameError(true);

    const notValidPassword = invalidPassword(true, password);
    if (notValidPassword) setPasswordError(true);

    let notValidRepassword = null;
    if (!signInMode) {
      notValidRepassword = invalidRepassword(true, repassword);
      if (notValidRepassword) {
        setRepasswordError(true);
      } else if (password !== repassword) {
        notValidRepassword =
          "É preciso que senha e repetição de senha sejam iguais";
        setRepasswordError(true);
      }
    }

    const NVusernameStringfy = notValidUsername ?? "";
    const NVpasswordStringfy = notValidPassword ?? "";
    const NVrepasswordStringfy = notValidRepassword ?? "";

    const allow = !notValidUsername && !notValidPassword && !notValidRepassword;

    if (!allow) {
      dispatchMessageBox(
        "error",
        "CAMPO INVALIDO:",
        NVusernameStringfy +
          " " +
          NVpasswordStringfy +
          " " +
          NVrepasswordStringfy
      );
      return false;
    } else {
      return true;
    }
  }

  return {
    username,
    setUsername,
    password,
    setPassword,
    repassword,
    setRePassword,
    handleSubmit,
    usernameError,
    setUsernameError,
    passwordError,
    setPasswordError,
    repasswordError,
    setRepasswordError,
  };
}
