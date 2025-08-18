import ScreenTitle from "@/shared/ScreenTitle";
import screenTitleButtonStyles from "./styles";
import SvgModel from "@/components/svg";
import { gameDelete } from "@/services/game/api-service";
import { useScreen } from "@/contexts/screen/useScreen";
import { useUser } from "@/contexts/user/useUser";
import { useMessageBox } from "@/contexts/messageBox/useMessageBox";
import { useHistory } from "@/contexts/history/useHistory";

interface Props {
  totalEntries: number;
  totalDataList: number;
}

export default function ScreenTitleButtons({
  totalEntries,
  totalDataList,
}: Props) {

  const { nextScreen } = useScreen();
  const { addHistoryItem } = useHistory();
  const { dispatchMessageBox } = useMessageBox();
  const { setResponse, setEntries, setDataList } = useUser();

  const handleDeleteModel = async () => {
    await gameDelete()
      .then(() => {
        setResponse("");
        setEntries([]);
        setDataList([]);
        nextScreen("dashboard");
        dispatchMessageBox(
          "success",
          "JOGO DELETADO:",
          "Seu jogo foi deletado com sucesso"
        );
        addHistoryItem({
          type: "removeu",
          field: "seu própio jogo",
        });
      })
      .catch(() => {
        dispatchMessageBox(
          "error",
          "OPERAÇÃO INVALIDA:",
          "Não foi possivel deletar seu jogo"
        );
      });
  };

  return (
    <ScreenTitle title="Editar Jogo:">
      <div
        data-name="edit-game-screen-entries-label-container"
        className={screenTitleButtonStyles["iconStyle"]}
      >
        <SvgModel name="entries" width="100%" height="100%" />
        <h2 className={screenTitleButtonStyles["entrieLabel"]}>
          :{totalEntries}
        </h2>
      </div>
      <div
        data-name="edit-game-screen-dataList-label-container"
        className={screenTitleButtonStyles["iconStyle"]}
      >
        <SvgModel name="dataList" width="100%" height="100%" />
        <h2 className={screenTitleButtonStyles["dataListLabel"]}>
          :{totalDataList}
        </h2>
      </div>
      <div
        data-name="edit-game-screen-delete-model"
        className={screenTitleButtonStyles["iconStyle"]}
        onClick={handleDeleteModel}
      >
        <SvgModel name="deleteModel" width="100%" height="100%" />
      </div>
    </ScreenTitle>
  );
}
