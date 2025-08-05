"use client";

import SvgModel from "@/components/svg";
import Create from "@/features/Game/Create";
import Header from "@/shared/Header";
import ScreenTitle from "@/shared/ScreenTitle";

import React from "react";

export default function CreateGameScreen() {
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
        <ScreenTitle>
          <div className="w-[7%] h-[50%] flex justify-center items-center">
            <SvgModel name="entries" width="100%" height="100%" />
            <h2 className="font-black text-[#31B3B5]">:0</h2>
          </div>
          <div className="w-[7%] h-[50%] flex justify-center items-center">
            <SvgModel name="dataList" width="100%" height="100%" />
            <h2 className="font-black text-[#8B3D4B]">:0</h2>
          </div>
        </ScreenTitle>
        <Create />
      </div>
    </div>
  );
}
