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
    }
    return !notValidResponse;
  }

  return {
    response,
    setResponse,
    responseError,
    setResponseError,
    responseValidation,
  };
}
