import Image from "next/image";
import imageAreaStyles from "./styles";

export default function ImageArea() {
  return (
    <div
      data-name="auth-image-area"
      className={imageAreaStyles["container"]}
    >
      <Image
        fill
        priority
        className={imageAreaStyles["imageContent"]}
        alt="image"
        src="/img/dog.png"
      />
    </div>
  );
}