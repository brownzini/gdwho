import Slider from "@/components/Slider";
import { Dispatch, SetStateAction } from "react";
import soundStyles from "./styles";

interface Props {
  volume: number;
  setVolume: Dispatch<SetStateAction<number>>;
}

export default function SoundArea({ volume, setVolume }:Props) {
  return (
    <div 
      data-name="sound-container" 
      className={soundStyles["container"]}
    >
      <Slider
        value={volume}
        setValue={setVolume}
        inline="flex-col"
        label="Volume Do Audio:"
      />
    </div>
  );
}
