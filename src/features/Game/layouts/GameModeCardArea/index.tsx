import Button from "@/components/Button";
import gameModeCardStyles from "./styles";

import GAME_MODE_CARD from "@/constants/gameModeCards";
import GameModeType from "@/types/GameMode";
import SvgModel from "@/components/svg";

interface Props {
  loading: boolean;
  typeMode: GameModeType;
  handleClick?: () => void;
}

export default function GameModeCardArea({
  loading,
  typeMode = "randomMode",
  handleClick,
}: Props) {
  const hoverButton =
    gameModeCardStyles["buttonDescription"] +
    GAME_MODE_CARD[typeMode].colors.hoverButton;

  return (
    <div
      data-name="game-mode-card-container"
      className={gameModeCardStyles["container"]}
      style={{ border: GAME_MODE_CARD[typeMode].colors.borderArea }}
    >
      <div
        data-name="game-mode-card-header-area"
        className={gameModeCardStyles["header"]}
      >
        <h2
          data-name="game-mode-card-header-title"
          className={gameModeCardStyles["headerTitle"]}
          style={{ color: GAME_MODE_CARD[typeMode].colors.title }}
        >
          {GAME_MODE_CARD[typeMode].titleContent}
        </h2>
      </div>
      <div
        data-name="game-mode-card-body-area"
        className={gameModeCardStyles["body"]}
      >
        <h3
          data-name="game-mode-card-body-label"
          className={gameModeCardStyles["bodyLabel"]}
          style={{ color: GAME_MODE_CARD[typeMode].colors.label }}
        >
          {GAME_MODE_CARD[typeMode].labelContent}
        </h3>
      </div>
      <div
        data-name="game-mode-card-footer-area"
        className={gameModeCardStyles["footer"]}
      >
        <Button
          width="w-full"
          height="h-[16px] sm:h-full"
          bgColor={GAME_MODE_CARD[typeMode].colors.button}
          borderRadius="rounded-[5px]"
          hoverBgColor="hover:bg-[#fff]"
          borderStyle={GAME_MODE_CARD[typeMode].colors.borderButton}
          fontStyle={hoverButton}
          onClick={handleClick}
          disabled={loading}
        >
          {loading ? (
            <SvgModel 
              name="loading" 
              width="50%" 
              height="50%" 
              color="#FFF" 
            />
          ) : (
            GAME_MODE_CARD[typeMode].buttonDescription
          )}
        </Button>
      </div>
    </div>
  );
}
