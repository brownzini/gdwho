"use client";

import { useState } from "react";

import ScreenTitle from "@/shared/ScreenTitle";
import ScreenHeader from "@/shared/ScreenHeader";
import BackButton from "@/shared/BackButton";
import PlayerModeModal from "@/features/Game/PlayerModeModal";
import SelectMode from "@/features/Game/SelectMode";

import useSelectMode from "@/features/Game/hooks/useSelectMode";

import { useScreen } from "@/contexts/screen/useScreen";

import gameSelectScreenStyles from "./styles";
import GameModeType from "@/types/GameMode";
import useLoading from "@/features/Game/hooks/useLoading";

interface Props {
  username:string;
}

export default function GameSelectScreen({ username }:Props) {

  const { backScreen } = useScreen();
  const { loading, setLoading } = useLoading();
  const { playerModeId, setPlayerModeId, handleSearch } = useSelectMode();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onCloseModal = () => setIsOpen(false);
  const onOpenModal = () => setIsOpen(true);

  const handleAction = async (type: GameModeType) => {
    setLoading(true);
    await handleSearch(type);
    setLoading(false);
  };

  return (
    <>
      <PlayerModeModal
        isOpen={isOpen}
        onCloseModal={onCloseModal}
        value={playerModeId}
        setValue={setPlayerModeId}
        handleAction={handleAction}
      />
      <div
        data-name="game-select-screen-container"
        className={gameSelectScreenStyles["container"]}
      >
        <ScreenHeader
          nameTitle={username}
        />
        <div className="w-[93%] h-[1px] bg-[#D9D9D9]" />
        <div
          data-name="game-select-wrapper"
          className={gameSelectScreenStyles["wrapper"]}
        >
          <ScreenTitle title="Modo de Jogo:" />
          <SelectMode 
            loading={loading}
            handleAction={handleAction} 
            onOpenModal={onOpenModal} 
          />
          <div
            data-name="game-select-back-button-area"
            className={gameSelectScreenStyles["backButtonArea"]}
          >
            <BackButton xPosition="end" onClick={backScreen} />
          </div>
        </div>
      </div>
    </>
  );
}
