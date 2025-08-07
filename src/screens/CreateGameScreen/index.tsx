"use client";

import SvgModel from "@/components/svg";
import Create from "@/features/Game/Create";
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
        <ScreenTitle title="Criar Jogo:">
          <div
            data-name="create-game-screen-entries-label-container"
            className={createGameScreenStyles["iconStyle"]}
          >
            <SvgModel
              name="entries"
              width="100%"
              height="100%"
              onClick={() => console.log("")}
            />
            <h2
              data-name="create-game-screen-entries-label"
              className={createGameScreenStyles["entrieLabel"]}
            >
              :0
            </h2>
          </div>
          <div
            data-name="create-game-screen-dataList-label-container"
            className={createGameScreenStyles["iconStyle"]}
          >
            <SvgModel
              name="dataList"
              width="100%"
              height="100%"
              onClick={() => console.log("")}
            />
            <h2
              data-name="create-game-screen-dataList-label"
              className={createGameScreenStyles["dataListLabel"]}
            >
              :0
            </h2>
          </div>
        </ScreenTitle>
        <Create />
      </div>
    </div>
  );
}
