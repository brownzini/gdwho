"use client";

import { CardColorsType } from "@/types/CardColors";
import { Dispatch, SetStateAction } from "react";

import GameCard from "@/shared/GameCard";
import selectColorsStyles from "./styles";

interface Props {
  colors: CardColorsType;
  setColors: Dispatch<SetStateAction<CardColorsType>>;
}

export default function SelectColorsArea({ colors, setColors }:Props) {

  const updateColor = (key: string, value: string) => {
    setColors((prevColors) => ({
      ...prevColors,
      [key]: value,
    }));
  };

  return (
    <div
      data-name="select-colors-container"
      className={selectColorsStyles["container"]}
    >
      <h2 className={selectColorsStyles["label"]}>
        Cores:
      </h2>
      <div 
        data-name="cards-list-area" 
        className={selectColorsStyles["cardListArea"]}
      >
        <GameCard
          editMode
          type="correct"
          color={colors.correct}
          updateColor={updateColor}
          description="Muito Perto"
        />
        <GameCard
          editMode
          type="nearby"
          description="Proximo"
          color={colors.nearby}
          updateColor={updateColor}
        />
        <GameCard
          editMode
          type="distant"
          description="Distante"
          color={colors.distant}
          updateColor={updateColor}
        />
      </div>
    </div>
  );
}
