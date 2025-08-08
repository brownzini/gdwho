
import CorrectAnswerResponseArea from "../layouts/CorrectAnswerResponseArea";
import CorrectAnswerBackButtonArea from "../layouts/CorrectAnswerBackButtonArea";

import correctAnswerStyles from "./styles";

export default function CorrectAnswerFeature() {
  return (
    <div
      data-name="correct-answer-container"
      className={correctAnswerStyles["container"]}
    >
      <CorrectAnswerResponseArea response="BOLO DE CHOCOLATE" />
      <CorrectAnswerBackButtonArea />
    </div>
  );
}
