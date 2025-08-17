import { Dispatch, SetStateAction, useState } from "react";

import { validateText } from "@/utils/validators/textField";
import { sendGuess } from "@/services/game/api-service";
import GuessType from "@/types/GuessType";

import { useGame } from "@/contexts/game/useGame";
import soundEffect from "@/components/SoundEffect";
import { useMessageBox } from "@/contexts/messageBox/useMessageBox";
import { useHistory } from "@/contexts/history/useHistory";

interface Props {
  volume: number;
  setIsThatCorrect?: Dispatch<SetStateAction<boolean>>;
}

export default function useInGame({ setIsThatCorrect, volume }: Props) {
  const { selectedGameIndex, listOfGameIDs } = useGame();

  const [value, setValue] = useState<string>("");

  const [bestGuessses, setBestGuessses] = useState<GuessType[]>([]);
  const [worstGuessses, setWorstGuessses] = useState<GuessType[]>([]);

  const { addHistoryItem } = useHistory();
  const { dispatchMessageBox } = useMessageBox();

  const WON_THE_GAME = 102;

  function fieldValidation() {
    const validationResponse = validateText(value, {
      required: true,
      minLength: 3,
      maxLength: 50,
      messages: {
        required: "Campo obrigatório",
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
    soundEffect(type, volume);
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
      dispatchMessageBox("error", "ERRO ENVIO DE PALPITE", hasValidField);
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
              if (setIsThatCorrect) { 
                  const creatorPlayerName = listOfGameIDs[selectedGameIndex??0].username;
                  setIsThatCorrect(true);
                  addHistoryItem({
                    type:"acertou",
                    field: "o jogo de "+creatorPlayerName,
                  });
              }
            } else {
              measureGuessLevel(result);
            }
          } else {
            dispatchMessageBox(
              "error",
              "ERRO ENVIO DE PALPITE",
              "Não foi possivel enviar seu palpite"
            );
          }
        } else {
          dispatchMessageBox(
            "error",
            "ERRO ENVIO DE PALPITE",
            "Não foi possivel enviar seu palpite"
          );
        }
      })
      .catch(() => {
        dispatchMessageBox(
          "error",
          "ERRO ENVIO DE PALPITE",
          "Não foi possivel  enviar seu palpite"
        );
      });
    resetField();
    return;
  }

  function resetField() {
    setValue("");
  }

  function getCreatorGameName() {
    const validPlayer = listOfGameIDs[Number(selectedGameIndex)];
    const username = validPlayer ? validPlayer.username : "não identificado";
    return username;
  }

  return {
    bestGuessses,
    worstGuessses,
    value,
    setValue,
    handleSubmit,
    getCreatorGameName,
  };
}
