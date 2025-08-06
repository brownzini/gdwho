import Slider from "@/components/Slider";
import { useState } from "react";
import soundStyles from "./styles";

export default function Sound() {
  const [volume, setVolume] = useState<number>(0);
  return (
    <div className={soundStyles["container"]}>
      <Slider 
        value={volume} 
        setValue={setVolume} 
        inline="flex-col"
        label="Volume Do Audio:"
      />
    </div>
  );
}
