"use client";

import SvgModel from "@/components/svg";
import Create from "@/features/Game/Create";
import ScreenHeader from "@/shared/ScreenHeader";
import ScreenTitle from "@/shared/ScreenTitle";

import React from "react";
import createGameScreenStyles from "./styles";
import { useUser } from "@/contexts/user/useUser";

export default function CreateGameScreen() {
  const { entries, dataList } = useUser();

  const entriesTotal = entries.length;
  const dataListTotal = dataList.length;

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
              :{entriesTotal}
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
              :{dataListTotal}
            </h2>
          </div>
        </ScreenTitle>
        <Create />
      </div>
    </div>
  );
}
