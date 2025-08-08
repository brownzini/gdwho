import { useState } from "react";

import ScreenHeader from "@/shared/ScreenHeader";
import Modal from "@/shared/Modal";
import ScreenTitle from "@/shared/ScreenTitle";

import Input from "@/components/Input";
import Button from "@/components/Button";

import gameSelectScreenStyles from "./styles";

import SelectMode from "@/features/Game/SelectMode";
import BackButton from "@/shared/BackButton";

export default function GameSelectScreen() {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  const onCloseModal = () => setIsOpen(false);
  const onOpenModal = () => setIsOpen(true);

  return (
    <>
      <Modal 
        title="Modo Player"
        isOpen={isOpen}
        onCloseModal={onCloseModal}
      >
        <div 
          data-name="modal-content-area"
          className={gameSelectScreenStyles["modalContentArea"]}
        >
          <Input
            value={value}
            setValue={setValue}
            height="h-[auto] pl-7"
            borderStyle="border-[1px] border-[#686666] p-3 rounded-[5px]"
            placeHolder="Digite o código ..."
          />
          <Button
            width="w-[25%]"
            height="min-h-[50px] max-h-[50px] p-5"
            bgColor="bg-[#EDB306]"
            borderStyle="border-[1px] border-[#EDB306]"
            hoverBgColor="hover:bg-[#CB9610]"
            borderRadius="rounded-[5px]"
          >
            <p 
              data-name="modal-button-description"
              className={gameSelectScreenStyles["buttonDescription"]}
            >
              JOGAR
            </p>
          </Button>
        </div>
      </Modal>
      <div
        data-name="game-select-screen-container"
        className={gameSelectScreenStyles["container"]}
      >
        <ScreenHeader
          nameTitle="Gabriel"
          todayTitle="Hoje é segunda feira , 11/07/2025"
        />
        <div className="w-[93%] h-[1px] bg-[#D9D9D9]" />
        <div
          data-name="game-select-wrapper"
          className={gameSelectScreenStyles["wrapper"]}
        >
          <ScreenTitle title="Modo de Jogo:" />
          <SelectMode onOpenModal={onOpenModal} />
          <div
            data-name="game-select-back-button-area"
            className={gameSelectScreenStyles["backButtonArea"]}
          >
            <BackButton
              xPosition="end"
              onClick={() => console.log("")} 
            />
          </div>
        </div>
      </div>
    </>
  );
}
