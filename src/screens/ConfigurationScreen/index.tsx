"use client";

import Header from "@/shared/Header";
import ScreenTitle from "@/shared/ScreenTitle";

import React from "react";
import configurationScreenStyles from "./styles";
import Configuration from "@/features/Configuration";

export default function ConfigurationScreen() {
  return (
    <div
      data-name="config-screen-container"
      className={configurationScreenStyles["container"]}
    >
      <Header
        nameTitle="Gabriel"
        todayTitle="Hoje é segunda feira , 11/07/2025"
      />
      <div className="w-[93%] h-[1px] bg-[#D9D9D9]" />
      <div
        data-name="config-screen-wrapper" 
        className={configurationScreenStyles["wrapper"]}
      >
        <ScreenTitle title="Configurações:" />
        <Configuration />
      </div>
    </div>
  );
}
