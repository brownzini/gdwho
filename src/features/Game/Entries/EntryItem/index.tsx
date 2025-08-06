import SvgModel from "@/components/svg";
import entryItemStyles from "./entryItemStyles";

interface Props {
  input: string;
  output: string;
  label: number;
}

export default function EntryItem({ input, output, label }: Props) {
  return (
    <div className={entryItemStyles["wrapper"]}>
      <h3 className={entryItemStyles["input"]} title="Esse é o tooltip">
        {input}
      </h3>
      <h3 className={entryItemStyles["output"]}>{output}</h3>
      <span className={entryItemStyles["label"]}>{label}</span>
      <div className={entryItemStyles["action"]}>
        <div className={entryItemStyles["iconsArea"]}>
          <SvgModel name="edit" width="100%" height="75%" />
        </div>
        <div className={entryItemStyles["iconsArea"]}>
          <SvgModel name="delete" width="100%" height="100%" />
        </div>
      </div>
    </div>
  );
}
