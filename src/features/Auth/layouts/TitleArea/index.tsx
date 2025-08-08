import titleAreaStyles from "./styles";

interface Props {
  signInMode:boolean;
}

export default function TitleArea({ signInMode }:Props) {
  const titleName = (signInMode) ? "Login" : "Registrar";
  return (
    <div
      data-name="auth-title"
      className={titleAreaStyles["container"]}
    >
        <h2 className={titleAreaStyles["text"]}>{titleName}</h2>
    </div>
  )
}