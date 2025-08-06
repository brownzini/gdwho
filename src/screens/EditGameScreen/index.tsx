"use client";

import SvgModel from "@/components/svg";

import Edit from "@/features/Game/Edit";
import Header from "@/shared/Header";
import ScreenTitle from "@/shared/ScreenTitle";

import React from "react";
import editGameScreenStyles from "./styles";

export default function EditGameScreen() {
  return (
    <div
      data-name="edit-game-screen-container"
      className={editGameScreenStyles["container"]}
    >
      <Header
        nameTitle="Gabriel"
        todayTitle="Hoje é segunda feira , 11/07/2025"
      />
      <div className={editGameScreenStyles["divisor"]} />
      <div
        data-name="edit-game-screen-content"
        className={editGameScreenStyles["content"]}
      >
        <ScreenTitle title="Editar Jogo:">
          <div
            data-name="edit-game-screen-entries-label-container"
            className={editGameScreenStyles["iconStyle"]}
          >
            <SvgModel
              name="entries"
              width="100%"
              height="100%"
              onClick={() => console.log("")}
            />
            <h2 
              data-name="edit-game-screen-entries-label"
              className={editGameScreenStyles["entrieLabel"]}>
                :0
            </h2>
          </div>
          <div
            data-name="edit-game-screen-dataList-label-container"
            className={editGameScreenStyles["iconStyle"]}
          >
            <SvgModel
              name="dataList"
              width="100%"
              height="100%"
              onClick={() => console.log("")}
            />
            <h2
              data-name="edit-game-screen-dataList-label" 
              className={editGameScreenStyles["dataListLabel"]}
            >
              :0
            </h2>
          </div>
        </ScreenTitle>
        <Edit />
      </div>
    </div>
  );
}
