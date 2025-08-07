import { ReactNode } from "react";
import BackButton from "../BackButton";
import modalStyles from "./styles";

interface Props {
  title: string;
  isOpen: boolean;
  children: ReactNode;
  onCloseModal: () => void;
}

export default function Modal({
  title,
  isOpen,
  children,
  onCloseModal,
}: Props) {
  if (!isOpen) return null;
  return (
    <div data-name="modal-container" className={modalStyles["container"]}>
      <div data-name="modal-header" className={modalStyles["header"]}>
        <div
          data-name="modal-header-wrapper"
          className={modalStyles["headerWrapper"]}
        >
          <h2 data-name="modal-title" className={modalStyles["title"]}>
            {title}
          </h2>
        </div>
        <div
          data-name="modal-back-button-area"
          className={modalStyles["backButtonArea"]}
        >
          <BackButton onClick={onCloseModal} />
        </div>
      </div>
      <div
        data-name="modal-content-container"
        className={modalStyles["content"]}
      >
        {children}
      </div>
    </div>
  );
}
