import GameCard from "@/shared/GameCard";
import inGameStyles from "./styles";
import Input from "@/components/Input";
import { useState } from "react";
import Button from "@/components/Button";

type GuessType = {
  type: string;
  description: string;
};

export default function InGame() {
  const [value, setValue] = useState<string>("");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [bestGuessses, setBestGuessses] = useState<GuessType[]>([
    {
      type: "correct",
      description: "teste",
    },
    {
      type: "correct",
      description: "muito proximo",
    },
  ]);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [worstGuessses, setWorstGuessses] = useState<GuessType[]>([
    {
      type: "nearby",
      description: "proximo",
    },
    {
      type: "distant",
      description: "distante",
    },
  ]);

  return (
    <div 
      data-name="in-game-container" 
      className={inGameStyles["container"]}
    >
      <div 
        data-name="in-game-header" 
        className={inGameStyles["header"]}
      >
        <h2 
          data-name="in-game-header-title" 
          className={inGameStyles["headerTitle"]}>
          criado por:{" "}
        </h2>
        <h2
          data-name="in-game-header-subtitle"
          className={inGameStyles["headerSubTitle"]}
        >
          Gabriel Robinho Alves da silva
        </h2>
      </div>
      <div 
        data-name="in-game-content" 
        className={inGameStyles["content"]}
      >
        <div
          data-name="in-game-best-guesses-area"
          className={inGameStyles["bestGuesses"]}
        >
          {bestGuessses.map((element, index) => {
            return (
              <GameCard
                key={index}
                type={element.type}
                editMode={false}
                color="#0ed21c"
                description={element.description}
              />
            );
          })}
        </div>
        <div
          data-name="in-game-worst-guesses-area"
          className={inGameStyles["worstGuesses"]}
        >
          {worstGuessses.map((element, index) => {
            return (
              <GameCard
                key={index}
                type={element.type}
                editMode={false}
                color={element.type === "distant" ? "#d20e0e" : "#0e49d2"}
                description={element.description}
              />
            );
          })}
        </div>
        <div
          data-name="in-game-guesses-input-area"
          className={inGameStyles["guessInputArea"]}
        >
          <div
            data-name="in-game-best-guesses-input-label"
            className={inGameStyles["guessInputLabel"]}
          >
            Palpites:
          </div>
          <div
            data-name="in-game-best-guesses-input-content"
            className={inGameStyles["guessInputContent"]}
          >
            <Input
              type="text"
              value={value}
              setValue={setValue}
              borderStyle="border-[1px] border-[#747A79] rounded-[5px]"
              fontColor="text-[#747A79] placeholder-[#747A79]"
              placeHolder="Escreva seu palpite ..."
            />
          </div>
        </div>
        <div
          data-name="in-game-button-area"
          className={inGameStyles["buttonArea"]}
        >
          <div
            data-name="in-game-button-wrapper"
            className={inGameStyles["buttonWrapper"]}
          >
            <Button
              width="w-full min-w-[100px]"
              height="h-full min-h-[50px]"
              bgColor="bg-[#DC3333]"
              hoverBgColor="hover:bg-[#fff]"
              borderStyle="hover:border-[1px] hover:border-[#DC3333]"
            >
              <p
                data-name="in-game-button-description"
                className={inGameStyles["buttonDescription"]}
              >
                ENCERRAR
              </p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
