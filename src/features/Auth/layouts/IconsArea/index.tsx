import SvgModel from "@/components/svg";
import iconsStyles from "./styles";
import Link from "next/link";

export default function IconsArea() {
  return (
    <div data-name="auth-icon-area" className={iconsStyles["container"]}>
      <div
        data-name="auth-icon-content"
        className={iconsStyles["content"]("bg-[#0077B5]")}
      >
        <Link
          href="https://www.linkedin.com/in/gabriel-david-da-silva-a64914252"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-full"
        >
          <SvgModel name="linkedin" width="100%" height="100%" />
        </Link>
      </div>
      <div
        data-name="auth-icon-content"
        className={iconsStyles["content"]("bg-[#ffffff]")}
      >
        <Link
          href="https://github.com/brownzini"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-full"
        >
          <SvgModel name="github" width="100%" height="100%" />
        </Link>
      </div>
      <div
        data-name="auth-icon-content"
        className={iconsStyles["content"]("bg-[#C13584]")}
      >
        <Link
          href="https://www.instagram.com/brownzini"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-full"
        >
          <SvgModel name="instagram" width="100%" height="100%" />
        </Link>
      </div>
    </div>
  );
}
