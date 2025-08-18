
import CorrectAnswerResponseArea from "../layouts/CorrectAnswerResponseArea";
import CorrectAnswerBackButtonArea from "../layouts/CorrectAnswerBackButtonArea";

import correctAnswerStyles from "./styles";

interface Props {
  response:string;
}

export default function CorrectAnswerFeature({ response }:Props) {
  return (
    <div
      data-name="correct-answer-container"
      className={correctAnswerStyles["container"]}
    > 
      <audio autoPlay loop src={"/sound/won.MP3"} />
      <CorrectAnswerResponseArea response={response} />
      <CorrectAnswerBackButtonArea />
    </div>
  );
}
