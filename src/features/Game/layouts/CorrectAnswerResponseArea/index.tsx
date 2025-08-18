import Image from "next/image";

import correctAnswerResponseStyles from "./styles";

interface Props {
    response:string;
}

export default function CorrectAnswerResponseArea({ response }:Props) {

  const renderingResponseText = response.length > 50 ? response.slice(0,30)+"..." : response;

  return (
    <div
      data-name="correct-answer-wrapper"
      className={correctAnswerResponseStyles["container"]}
    >
      <div
        data-name="correct-answer-response-area"
        className={correctAnswerResponseStyles["wrapper"]}
      >
        <div
          data-name="correct-answer-image-area"
          className={correctAnswerResponseStyles["imageArea"]}
        >
          <Image
            fill
            priority
            className="w-full full object-cover rounded-tr-[25px] rounded-tl-[25px] "
            alt="image"
            src="/img/correct.png"
          />
        </div>
        <div
          data-name="correct-answer-response-description-area"
          className={correctAnswerResponseStyles["responseDescription"]}
        >
          <h2 className={correctAnswerResponseStyles["responseTitle"]}>
            Acertou !!!
          </h2>
          <h2 className={correctAnswerResponseStyles["responseDescriptionLabel"]}>
            
            {renderingResponseText}
          </h2>
        </div>
      </div>
    </div>
  );
}
