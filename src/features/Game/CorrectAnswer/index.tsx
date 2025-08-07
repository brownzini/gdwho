import Image from "next/image";

import correctAnswerStyles from "./styles";
import Button from "@/components/Button";

export default function CorrectAnswer() {
  return (
    <div
       data-name="correct-answer-container" 
       className={correctAnswerStyles["container"]}
    >
      <div
        data-name="correct-answer-wrapper"  
        className={correctAnswerStyles["wrapper"]}
      >
        <div
          data-name="correct-answer-response-area"  
          className={correctAnswerStyles["responseArea"]}
        >
          <div
            data-name="correct-answer-image-area"  
            className={correctAnswerStyles["imageArea"]}
          >
            <Image
              fill
              priority
              className="w-full full object-cover rounded-tr-[25px] rounded-tl-[25px] "
              alt="image"
              src="/logo.png"
            />
          </div>
          <div
            data-name="correct-answer-response-description-area"  
            className={correctAnswerStyles["responseDescription"]}
          >
            <h2
              data-name="correct-answer-response-description-label"  
              className={correctAnswerStyles["responseDescriptionLabel"]}
            >
              BOLO DE CHOCOLATE
            </h2>
          </div>
        </div>
      </div>
      <div
        data-name="in-game-button-area"
        className={correctAnswerStyles["buttonArea"]}
      >
        <div
          data-name="in-game-button-wrapper"
          className={correctAnswerStyles["buttonWrapper"]}
        >
          <Button
            width="w-full min-w-[100px]"
            height="h-full min-h-[50px]"
            bgColor="bg-[#35A2CC]"
            hoverBgColor="hover:bg-[#fff]"
            borderStyle="hover:border-[1px] hover:border-[#35A2CC]"
          >
            <p
              data-name="in-game-button-description"
              className={correctAnswerStyles["buttonDescription"]}
            >
              VOLTAR AO INICIO
            </p>
          </Button>
        </div>
      </div>
    </div>
  );
}
