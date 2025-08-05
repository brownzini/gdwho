"use client";

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
        <ScreenTitle />
        <Create />
      </div>
    </div>
  );
}
