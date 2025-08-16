import { useState } from "react";

import GameModeType from "@/types/GameMode";

import { useGame } from "@/contexts/game/useGame";
import { useUser } from "@/contexts/user/useUser";
import { findAllGames } from "@/services/game/api-service";
import { useScreen } from "@/contexts/screen/useScreen";
import { GameListType } from "@/types/GameContextType";
import { useMessageBox } from "@/contexts/messageBox/useMessageBox";

export default function useSelectMode() {
  const { userId } = useUser();
  const { nextScreen } = useScreen();
  const { listOfGameIDs, setListOfGameIDs, setSelectedGameIndex } = useGame();

  const [playerModeId, setPlayerModeId] = useState<string>("");

  const { dispatchMessageBox } = useMessageBox();

  const actionMode = {
    randomMode: (gameList: GameListType[]) => findRandomGame(gameList),
    creativeMode: (gameList: GameListType[]) => findCreativeGame(gameList),
    playerMode: (gameList: GameListType[]) => findGameByPlayerId(gameList),
  };

  async function handleSearch(key: GameModeType) {
    const haveLooked = listOfGameIDs.length > 0;
    if (haveLooked) {
      actionMode[key](listOfGameIDs);
    } else {
      await sendSearch(key);
    }
  }

  function findRandomGame(gameList: GameListType[]) {
    const totalGames = gameList.length;
    const haveAnyGame = totalGames > 0;
    const randomIndex = Math.floor(Math.random() * totalGames);
    const game = gameList[randomIndex];
    const gameIndex = game && haveAnyGame ? randomIndex : null;
    if (gameIndex !== null) {
      setSelectedGameIndex(gameIndex);
      nextScreen("inGameScreen");
    } else {
      dispatchMessageBox(
        "error",
        "ERRO SELEÇÃO DE JOGO",
        "Não foi possivel encontrar partida, teve novamente"
      );
    }
  }

  function findCreativeGame(gameList: GameListType[]) {
    const haveCreatedGame = gameList.findIndex(
      (player) => player.id === userId
    );
    const userGameIndex = haveCreatedGame > -1 ? haveCreatedGame : null;
    if (userGameIndex !== null) {
      setSelectedGameIndex(userGameIndex);
      nextScreen("inGameScreen");
    } else {
      dispatchMessageBox(
        "error",
        "ERRO SELEÇÃO DE JOGO",
        "Você ainda não tem nenhum jogo criado"
      );
    }
  }

  function findGameByPlayerId(gameList: GameListType[]) {
    const playerIndex = gameList.findIndex(
      (player) => player.id === Number(playerModeId)
    );
    const hasFind = playerIndex > -1 ? playerIndex : null;
    if (hasFind !== null) {
      setSelectedGameIndex(hasFind);
      nextScreen("inGameScreen");
    } else {
      dispatchMessageBox(
        "error",
        "ERRO SELEÇÃO DE JOGO",
        "Essa partida não existe ou não está disponivel"
      );
    }
  }

  async function sendSearch(key: GameModeType) {
    await findAllGames()
      .then((resp) => {
        const haveData = resp.hasOwnProperty("data");
        if (haveData) {
          const result = resp.data;
          if (result) {
            setListOfGameIDs(() => result);
            actionMode[key](result);
          } else {
            dispatchMessageBox(
              "error",
              "ERRO ENVIO DE PALPITE",
              "Não foi possivel encontrar partida"
            );
          }
        } else {
          dispatchMessageBox(
            "error",
            "ERRO SELEÇÃO DE JOGO",
            "Não há partidas"
          );
        }
      })
      .catch(() => {
        dispatchMessageBox("error", "ERRO AO BUSCAR JOGO", "Não foi possivel buscar por novas partidas");
      });
    return;
  }

  return {
    listOfGameIDs,
    handleSearch,
    playerModeId,
    setPlayerModeId,
  };
}
