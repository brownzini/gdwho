import BackButton from "@/shared/BackButton";
import headerStyles from "./styles";
import { useScreen } from "@/contexts/screen/useScreen";

export default function HeaderArea() {
  const { backScreen } = useScreen();
  return (
    <div
      data-name="history-screen-header-container"
      className={headerStyles["container"]}
    >
      <h2 className={headerStyles["title"]}>
        Histórico
      </h2>
      <BackButton 
        xPosition="end" 
        yPosition="center"
        onClick={backScreen}
        styles="md:hidden" 
      />
    </div>
  );
}
