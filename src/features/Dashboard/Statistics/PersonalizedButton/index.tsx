'use client'
import Button from "@/components/Button";
import personalizedButtonStyles from "./styles";
import SvgModel from "@/components/svg";

export default function PersonalizedButton() {

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
                    onClick={() => console.log("")}
                />
            </span>
            <Button 
                height="h-[100%] sm:h-[70%]"
                bgColor="bg-[#F5F5F5]"
                borderStyle="border-[1px] border-[#C68F7E] border-dashed" 
            >
               <p
                data-name="dashboard-statistics-personalizad-button-description"  
                className={personalizedButtonStyles["description"]}
               >
                    criar novo jogo
                </p>
            </Button>
        </div>
    );
}