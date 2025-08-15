import GameModeCard from "../layouts/GameModeCardArea";
import selectModeStyles from "./styles";
import GameModeType from "@/types/GameMode";

interface Props {
  loading: boolean;
  onOpenModal: () => void;
  handleAction: (key: GameModeType) => Promise<void>;
}

export default function SelectMode({
  loading,
  onOpenModal,
  handleAction,
}: Props) {
  return (
    <div
      data-name="select-game-mode-container"
      className={selectModeStyles["container"]}
    >
      <GameModeCard
        loading={loading}
        typeMode="randomMode"
        handleClick={async () => await handleAction("randomMode")}
      />
      <GameModeCard
        loading={loading}
        typeMode="creativeMode"
        handleClick={async () => await handleAction("creativeMode")}
      />
      <GameModeCard
        loading={loading}
        typeMode="playerMode"
        handleClick={onOpenModal}
      />
    </div>
  );
}
