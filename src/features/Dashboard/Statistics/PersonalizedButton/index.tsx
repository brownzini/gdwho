import Button from "@/components/Button";
import personalizedButtonStyles from "./styles";
import SvgModel from "@/components/svg";

export default function PersonalizedButton() {

    return (
        <div className={personalizedButtonStyles["container"]}>
            <span className={personalizedButtonStyles["buttonIcon"]}>
                <SvgModel name="add" width="100%" height="100%" />
            </span>
            <Button 
                height="h-[70%]"
                bgColor="bg-[#F5F5F5]"
                borderStyle="border-[1px] border-[#C68F7E] border-dashed" 
            >
               <p className={personalizedButtonStyles["description"]}>criar um jogo</p>
            </Button>
        </div>
    );
}