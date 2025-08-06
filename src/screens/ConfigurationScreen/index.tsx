"use client";

import SelectColors from "@/features/Configuration/SelectColors";
import Sound from "@/features/Configuration/Sound";
import Header from "@/shared/Header";
import ScreenTitle from "@/shared/ScreenTitle";

import React from "react";
export default function ConfigurationScreen() {
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
        <ScreenTitle title="Configurações:" />
        <div
          className={`
          w-[100%] h-[100%] 
          flex flex-col justify-center items-center
          pl-10 pr-10
        `}
        >
          <Sound />
          <SelectColors />
          <div className="bg-[#641499] w-full h-[20%]">
            <button>voltar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
