"use client";

import cardStyles from "./styles";

interface Props {
  type: string;
  color: string;
  editMode: boolean;
  description:string;
  updateColor?: (key: string, value: string) => void;
}

export default function Card({
  type = "correct",
  editMode,
  color,
  description,
  updateColor,
}: Props) {

  const backgroundColor = color;
  const border = "1px solid "+color;
  
  return (
    <div 
      data-name="card-container" 
      className={cardStyles["container"]}
    >
      <div
        data-name="color-pick-area"
        className={cardStyles["colorPickArea"]}
        style={{ backgroundColor }}
      >
        {editMode && (
          <input
            type="color"
            value={color}
            className="w-full h-full"
            onChange={(e) => updateColor && updateColor(type, e.target.value)}
          />
        )}
      </div>
      <div
        data-name="card-body-area"
        className={cardStyles["cardBodyArea"]}
        style={{ border }}
      >
        <h3
          data-name="card-description"
          className={cardStyles["cardDescription"]}
          style={{ color }}
        >
          {description}
        </h3>
      </div>
    </div>
  );
}
