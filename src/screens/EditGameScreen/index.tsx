"use client";

import SvgModel from "@/components/svg";

import Edit from "@/features/Game/Edit";
import ScreenHeader from "@/shared/ScreenHeader";
import ScreenTitle from "@/shared/ScreenTitle";

import React from "react";
import editGameScreenStyles from "./styles";
import { useUser } from "@/contexts/user/useUser";
import { useScreen } from "@/contexts/screen/useScreen";

export default function EditGameScreen() {

  const { nextScreen } = useScreen();
  
  const { response, entries, dataList } = useUser();
  
  if(response === "") nextScreen("dashboard"); 

  return (
    <div
      data-name="edit-game-screen-container"
      className={editGameScreenStyles["container"]}
    >
      <ScreenHeader
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
            />
            <h2
              data-name="edit-game-screen-entries-label"
              className={editGameScreenStyles["entrieLabel"]}
            >
              :{entries.length}
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
            />
            <h2
              data-name="edit-game-screen-dataList-label"
              className={editGameScreenStyles["dataListLabel"]}
            >
              :{dataList.length}
            </h2>
          </div>
        </ScreenTitle>
        <Edit />
      </div>
    </div>
  );
}
