import { Dispatch, SetStateAction, useState } from "react";

import { validateText } from "@/utils/validators/textField";
import { sendGuess } from "@/services/game/api-service";
import GuessType from "@/types/GuessType";

interface Props {
  setIsThatCorrect: Dispatch<SetStateAction<boolean>>;
}

export default function useInGame({ setIsThatCorrect }: Props) {
  const [value, setValue] = useState<string>("");
  const [bestGuessses, setBestGuessses] = useState<GuessType[]>([]);
  const [worstGuessses, setWorstGuessses] = useState<GuessType[]>([]);

  const WON_THE_GAME = 102;

  function fieldValidation() {
    const validationResponse = validateText(value, {
      required: true,
      minLength: 3,
      maxLength: 50,
      messages: {
        required: "Response é obrigatório.",
        minLength: "Mínimo 3 letras.",
        maxLength: "Máximo 50 letras.",
      },
    });
    return validationResponse;
  }

  function measureGuessLevel(level: number) {
    const normalizedLevel = level * 100;

    const lowAccuracy = normalizedLevel <= 40;
    const averageAccuracy = normalizedLevel > 40 && normalizedLevel <= 69;
    const highAccuracy = normalizedLevel > 69;

    if (lowAccuracy) addNewGuess(setWorstGuessses, "distant");
    if (averageAccuracy) addNewGuess(setWorstGuessses, "correct");
    if (highAccuracy) addNewGuess(setBestGuessses, "correct");
  }

  function addNewGuess(
    setAccuracyValue: (description: SetStateAction<GuessType[]>) => void,
    type: "correct" | "nearby" | "distant"
  ) {
    setAccuracyValue((prevState) => [
      ...prevState,
      {
        type,
        description: value,
      },
    ]);
  }

  async function handleSubmit() {
    const hasValidField = fieldValidation();
    if (hasValidField) {
      console.log("[ERRO]: " + hasValidField);
    } else {
      await sendGuessToApi();
    }
  }

  async function sendGuessToApi() {
    const id = 1;
    await sendGuess(id, value)
      .then((resp) => {
        const haveData = resp.hasOwnProperty("data");
        if (haveData) {
          const { result } = resp.data;
          if (result) {
            if (WON_THE_GAME === result) {
              setIsThatCorrect(true);
            } else {
              measureGuessLevel(result);
            }
          } else {
            console.log("erro não existe resultado");
          }
        } else {
          console.log("erro não existe data");
        }
      })
      .catch(() => {
        console.log("deu errado kkkkk");
      });
    resetField();
    return;
  }

  function resetField() {
    setValue("");
  }

  return {
    bestGuessses,
    worstGuessses,
    value,
    setValue,
    handleSubmit,
  };
}

// {
//   type: "correct",
//   description: "muito proximo",
// },

// {
//   type: "nearby",
//   description: "proximo",
// },
// {
//   type: "distant",
//   description: "distante",
// },
