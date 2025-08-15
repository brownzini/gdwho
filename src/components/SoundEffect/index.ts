type SoundType = "correct" | "nearby" | "distant" | "out";

export default function soundEffect(param: SoundType, volume: number) {
  const typeSound = {
    correct: "/sound/correct.MP3",
    nearby: "/sound/nearby.MP3",
    distant: "/sound/distant.MP3",
    out: "/sound/out.MP3",
  };
  const audio = new Audio(typeSound[param]);
  const normalizedVolume = volume/100;
  audio.volume = normalizedVolume;
  audio.play();
}
