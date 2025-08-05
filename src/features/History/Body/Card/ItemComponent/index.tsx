type ActionType = "criou" | "listou" | "atualizou" | "removeu";

interface Props {
  type: ActionType;
  quantity: number;
  field: string;
}

export default function ItemComponent({ type, quantity, field }: Props) {
  const colors: Record<ActionType, string> = {
    criou: "border border[#911893] text-[#911893] ",
    listou: "border border[#1B2B62] text-[#1B2B62] ",
    atualizou: "border border[#0D8E99] text-[#0D8E99] ",
    removeu: "border border[#99250D] text-[#99250D] ",
  };

  const bodyDiv =
    "flex justify-center items-center w-[100%] h-[16%] 2xl:max-h-[4vh] " +
    colors[type] +
    " p-1 rounded-[5px] font-semibold leading-none";

  return (
    <div className={bodyDiv}>
      <h2>{type + " " + quantity + " " + field}</h2>
    </div>
  );
}
