import { Dispatch, SetStateAction, useState } from "react";
import { invalidResponseField } from "@/services/game/businessRuleValidations-service";
import { useMessageBox } from "@/contexts/messageBox/useMessageBox";

export default function useResponse() {
  const [response, setResponse] = useState<string>("");
  const [responseError, setResponseError] = useState<string>("");

  const { dispatchMessageBox } = useMessageBox();

  function responseValidation(
    value: string,
    setResponseError: Dispatch<SetStateAction<string>>
  ) {
    const notValidResponse = invalidResponseField(true, value);
    if (notValidResponse) {
      setResponseError(notValidResponse);
      emitError(setResponseError);
      dispatchMessageBox(
        "error",
        "ALTERAÇÃO FALHOU",
        notValidResponse
      );
    }
    return !notValidResponse;
  }

  function emitError(setStateError: (value: SetStateAction<string>) => void) {
    setTimeout(() => {
      setStateError("");
    }, 500);
  }

  return {
    response,
    setResponse,
    responseError,
    setResponseError,
    responseValidation,
  };
}
