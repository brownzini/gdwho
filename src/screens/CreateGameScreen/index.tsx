"use client";

import SvgModel from "@/components/svg";
import Create from "@/features/Game/Create";
import Header from "@/shared/Header";
import ScreenTitle from "@/shared/ScreenTitle";

import React from "react";

export default function CreateGameScreen() {
  const iconsStyle =
    "min-w-[25px] sm:min-w-[5px] w-[10%] sm:w-[10%] md:w-[10%] lg:w-[10%] xl:w-[7%] h-[50%] flex justify-center items-center";
  return (
    <div
      className="
            w-[100%] h-[100%]
            flex flex-col justify-center items-center gap-3 lg:gap-7 xl:gap-3
        "
    >
      <Header
        nameTitle="Gabriel"
        todayTitle="Hoje é segunda feira , 11/07/2025"
      />
      <div className="w-[93%] h-[1px] bg-[#D9D9D9]" />
      <div className="w-[100%] h-[100%] flex flex-col justify-center items-start">
        <ScreenTitle title="Criar Jogo:">
          <div className={iconsStyle}>
            <SvgModel name="entries" width="100%" height="100%" />
            <h2 className="font-black text-[#31B3B5]">:0</h2>
          </div>
          <div className={iconsStyle}>
            <SvgModel name="dataList" width="100%" height="100%" />
            <h2 className="font-black text-[#8B3D4B]">:0</h2>
          </div>
        </ScreenTitle>
        <Create />
      </div>
    </div>
  );
}
