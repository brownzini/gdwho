import { Dispatch, SetStateAction } from "react";

interface Props {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
  label: string;
  inline?: string;
  labelColor?: string;
  sliderColor?: string;
  disabled?: boolean;
}
export default function Slider({
  value,
  setValue,
  inline = "flex-row",
  label,
  labelColor = "#2A1135",
  sliderColor = "#61ECBB",
  disabled = false,
}: Props) {
  const sliderStyles = {
    container: `
            w-full max-w-md 
            flex ${inline} justify-center items-start gap-5
    `,
    label: `text-[${labelColor}] font-black font-["Roboto"]`,
    input: `w-full h-[2px] bg-[#482374] rounded-lg appearance-none cursor-pointer`,
  };
  return (
    <div className={sliderStyles["container"]}>
      <p className={sliderStyles["label"]}>
        {label} ({value}%)
      </p>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className={sliderStyles["input"]}
        style={{
          WebkitAppearance: "none",
          appearance: "none",
        }}
        disabled={disabled}
      />
      <style>
        {`
            input[type='range']::-webkit-slider-thumb {
                -webkit-appearance: none;
                appearance: none;
                height: 25px;
                width: 25px;
                border-radius: 9999px;
                background: ${sliderColor}; 
                cursor: pointer;
                margin-top: 0px; 
            }

            input[type='range']::-moz-range-thumb {
              height: 25px;
              width: 25px;
              border-radius: 9999px;
              background: ${sliderColor};
              cursor: pointer;
            }
    `}
      </style>
    </div>
  );
}
