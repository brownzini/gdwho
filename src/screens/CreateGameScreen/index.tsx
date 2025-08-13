"use client";

import CreateFeature from "@/features/Game/Create";
import ScreenHeader from "@/shared/ScreenHeader";
import ScreenTitle from "@/shared/ScreenTitle";

import React from "react";
import createGameScreenStyles from "./styles";

export default function CreateGameScreen() {
  return (
    <div
      data-name="create-game-screen-container"
      className={createGameScreenStyles["container"]}
    >
      <ScreenHeader
        nameTitle="Gabriel"
        todayTitle="Hoje é segunda feira , 11/07/2025"
      />
      <div className="w-[93%] h-[1px] bg-[#D9D9D9]" />
      <div
        data-name="create-game-screen-content"
        className={createGameScreenStyles["content"]}
      >
        <ScreenTitle title="Criar Jogo:" />
        <CreateFeature />
      </div>
    </div>
  );
}
