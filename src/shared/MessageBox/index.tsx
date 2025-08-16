import Button from "@/components/Button";
import messageBoxStyles from "./styles";
import { useMessageBox } from "@/contexts/messageBox/useMessageBox";
import MESSAGE_BOX from "@/constants/messageBox";
import { MessageType } from "@/types/messageBoxContextType";

export default function MessageBox() {
  const { messageType, title, subTitle, closeMessageBox } = useMessageBox();

  const renderingDetailMB = (type: MessageType) => {
    const details = {
      success: MESSAGE_BOX.STYLE.SUCCESS.DETAIL,
      warning: MESSAGE_BOX.STYLE.NEARBY.DETAIL,
      error: MESSAGE_BOX.STYLE.DISTANT.DETAIL,
    };
    return details[type];
  };

  const renderingTextMB = (type: MessageType) => {
    const details = {
      success: MESSAGE_BOX.STYLE.SUCCESS.DESCRIPTION,
      warning: MESSAGE_BOX.STYLE.NEARBY.DESCRIPTION,
      error: MESSAGE_BOX.STYLE.DISTANT.DESCRIPTION,
    };
    return details[type];
  };

  return (
    <div className={messageBoxStyles["container"]}>
      <div className={messageBoxStyles["wrapper"]}>
        <div
          className={messageBoxStyles["detail"](renderingDetailMB(messageType))}
        />
        <div className={messageBoxStyles["content"]}>
          <div className={messageBoxStyles["headerArea"]}>
            <h2 className={messageBoxStyles["title"]}>{title}</h2>
            <Button
              width="w-[auto]"
              fontColor="text-[#193106] hover:text-[#970202]"
              onClick={closeMessageBox}
            >
              &times;
            </Button>
          </div>
          <div className={messageBoxStyles["bodyArea"]}>
            <h2
              className={messageBoxStyles["subTitle"](
                renderingTextMB(messageType)
              )}
            >
              {subTitle}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
