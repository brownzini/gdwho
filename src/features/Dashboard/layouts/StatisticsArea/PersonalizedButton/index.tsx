'use client'
import Button from "@/components/Button";
import personalizedButtonStyles from "./styles";
import SvgModel from "@/components/svg";
import { useScreen } from "@/contexts/screen/useScreen";

export default function PersonalizedButton() {
    
    const { nextScreen } = useScreen();

    return (
        <div
          data-name="dashboard-statistics-personalizad-button-container" 
          className={personalizedButtonStyles["container"]}
        >
            <span
                data-name="dashboard-statistics-personalizad-button-icon" 
                className={personalizedButtonStyles["buttonIcon"]}
            >
                <SvgModel 
                    name="add" 
                    width="100%" 
                    height="100%" 
                    onClick={() => nextScreen("createGameScreen")}
                />
            </span>
            <Button 
                height="h-[100%] sm:h-[70%]"
                bgColor="bg-[#F5F5F5]"
                borderStyle="border-[1px] border-[#C68F7E] border-dashed" 
                fontStyle={personalizedButtonStyles["description"]}
                onClick={() => nextScreen("createGameScreen")}
            >
                criar novo jogo
            </Button>
        </div>
    );
}