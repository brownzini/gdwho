import SvgModel from "@/components/svg";
import iconsStyles from "./styles";

export default function IconsArea() {
  return (
    <div data-name="auth-icon-area" className={iconsStyles["container"]}>
      <div
        data-name="auth-icon-content"
        className={iconsStyles["content"]("bg-[#0077B5]")}
      >
        <SvgModel name="linkedin" width="100%" height="100%" />
      </div>
      <div
        data-name="auth-icon-content"
        className={iconsStyles["content"]("bg-[#ffffff]")}
      >
        <SvgModel name="github" width="100%" height="100%" />
      </div>
      <div
        data-name="auth-icon-content"
        className={iconsStyles["content"]("bg-[#C13584]")}
      >
        <SvgModel name="instagram" width="100%" height="100%" />
      </div>
    </div>
  );
}
