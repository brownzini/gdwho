"use client";

import ScreenHeader from "@/shared/ScreenHeader";
import ScreenTitle from "@/shared/ScreenTitle";

import React from "react";
import configurationScreenStyles from "./styles";
import Configuration from "@/features/Configuration";

interface Props {
  username:string;
}

export default function ConfigurationScreen({ username }:Props) {
  return (
    <div
      data-name="config-screen-container"
      className={configurationScreenStyles["container"]}
    >
      <ScreenHeader
        nameTitle={username}
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
