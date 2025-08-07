import Button from "@/components/Button";
import backButtonStyles from "./styles";

type PositionType = "left" | "center" | "right";

interface Props {
  onClick: () => void;
  xPosition?: PositionType;
  yPosition?: PositionType;
}

export default function BackButton({
  xPosition = "left",
  yPosition = "center",
  onClick,
}: Props) {
  const position = {
    horizontal: {
      left: "justify-start",
      center: "justify-center",
      right: "justify-end",
    },
    vertical: {
      left: "items-start",
      center: "items-center",
      right: "items-end",
    },
  };
  return (
    <div
      data-name="back-button-container"
      className={backButtonStyles["buttonArea"](
        position["horizontal"][xPosition],
        position["vertical"][yPosition]
      )}
    >
      <Button
        width="w-full min-w-[50px] max-w-[100px]"
        height="h-[100%]"
        bgColor="bg-[#939292]"
        hoverBgColor="hover:bg-[#504c4c]"
        onClick={onClick}
      >
        <p
          data-name="back-button-description"
          className={backButtonStyles["backButtonDescription"]}
        >
          voltar
        </p>
      </Button>
    </div>
  );
}
