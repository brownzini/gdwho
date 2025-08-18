"use client";

import Edit from "@/features/Game/Edit";
import ScreenHeader from "@/shared/ScreenHeader";

import React from "react";
import editGameScreenStyles from "./styles";
import { useUser } from "@/contexts/user/useUser";
import { useScreen } from "@/contexts/screen/useScreen";
import ScreenTitleButtons from "@/features/Game/layouts/ScreenTitleButtons";

interface Props {
  username: string;
}

export default function EditGameScreen({ username }: Props) {
  
  const { nextScreen } = useScreen();

  const { response, entries, dataList } = useUser();

  if (response === "") nextScreen("dashboard");

  return (
    <div
      data-name="edit-game-screen-container"
      className={editGameScreenStyles["container"]}
    >
      <ScreenHeader nameTitle={username} />
      <div className={editGameScreenStyles["divisor"]} />
      <div
        data-name="edit-game-screen-content"
        className={editGameScreenStyles["content"]}
      >
        <ScreenTitleButtons
          totalEntries={entries.length}
          totalDataList={dataList.length}
        />
        <Edit />
      </div>
    </div>
  );
}
