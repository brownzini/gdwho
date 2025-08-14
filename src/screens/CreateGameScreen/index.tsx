"use client";

import CreateFeature from "@/features/Game/Create";
import ScreenHeader from "@/shared/ScreenHeader";
import ScreenTitle from "@/shared/ScreenTitle";

import React from "react";
import createGameScreenStyles from "./styles";
import { useUser } from "@/contexts/user/useUser";
import { useScreen } from "@/contexts/screen/useScreen";

export default function CreateGameScreen() {

  const { response } = useUser();
  const { nextScreen } = useScreen();

  if(response !== "") nextScreen("dashboard"); 

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
