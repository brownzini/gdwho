"use client";

import { CardColorsType } from "@/types/CardColors";
import { useState } from "react";

import Card from "@/shared/Card";
import selectColorsStyles from "./styles";

export default function SelectColors() {
  const [colors, setColors] = useState<CardColorsType>({
    correct: "#1F7117",
    nearby: "#193495",
    distant: "#A51212",
  });

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
      <h2
        data-name="label-select-colors"
        className={selectColorsStyles["label"]}
      >
        Cores:
      </h2>
      <div 
        data-name="cards-list-area" 
        className={selectColorsStyles["cardListArea"]}
      >
        <Card
          editMode
          type="correct"
          color={colors.correct}
          updateColor={updateColor}
          description="Muito Perto"
        />
        <Card
          editMode
          type="nearby"
          description="Proximo"
          color={colors.nearby}
          updateColor={updateColor}
        />
        <Card
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
