import Modal from "@/shared/Modal";
import playerModeModalStyles from "./styles";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { Dispatch, SetStateAction } from "react";
import GameModeType from "@/types/GameMode";

interface Props {
  isOpen: boolean;
  onCloseModal: () => void;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  handleAction: (type: GameModeType) => Promise<void>;
}

export default function PlayerModeModal({
  isOpen,
  onCloseModal,
  value,
  setValue,
  handleAction,
}: Props) {
  return (
    <Modal
      isOpen={isOpen}
      title="Modo Player"
      onCloseModal={onCloseModal}
      data-name="player-mode-modal-container"
    >
      <div
        data-name="modal-content-area"
        className={playerModeModalStyles["modalContentArea"]}
      >
        <Input
          value={value}
          setValue={setValue}
          height="h-[auto] pl-7"
          borderStyle="border-[1px] border-[#686666] p-3 rounded-[5px]"
          placeHolder="Digite o código ..."
          secondAction={async () => await handleAction("playerMode")}
        />
        <Button
          width="w-[25%]"
          height="min-h-[50px] max-h-[50px] p-5"
          bgColor="bg-[#EDB306]"
          hoverBgColor="hover:bg-[#CB9610]"
          borderStyle="border-[1px] border-[#EDB306] rounded-[5px]"
          fontStyle={playerModeModalStyles["buttonDescription"]}
          onClick={async () => await handleAction("playerMode")}
        >
          JOGAR
        </Button>
      </div>
    </Modal>
  );
}
