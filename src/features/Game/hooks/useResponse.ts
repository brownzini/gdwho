import { Dispatch, SetStateAction, useState } from "react";
import { invalidResponseField } from "@/services/game/businessRuleValidations-service";

export default function useResponse() {
  const [response, setResponse] = useState<string>("");
  const [responseError, setResponseError] = useState<string>("");

  function responseValidation(
    value: string,
    setResponseError: Dispatch<SetStateAction<string>>
  ) {
    const notValidResponse = invalidResponseField(true, value);
    if (notValidResponse) {
        setResponseError(notValidResponse);
        emitError(setResponseError);
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
