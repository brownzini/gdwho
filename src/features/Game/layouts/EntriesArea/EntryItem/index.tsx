import SvgModel from "@/components/svg";
import entryItemStyles from "./entryItemStyles";
import levelColors from "@/constants/levelColors";

interface Props {
  input: string;
  output: string;
  label: number | string;
  onEdit: () => void;
  onDelete: () => Promise<void>;
}

export default function EntryItem({
  input,
  output,
  label,
  onEdit,
  onDelete,
}: Props) {
  const shortedText = (value: string) => value.slice(0, 21);

  const renderBgColorLevel = () => {
    const normalizedLevel = Number(label);

    const lowAccuracy = normalizedLevel <= 40;
    const averageAccuracy = normalizedLevel > 40 && normalizedLevel <= 69;
    const highAccuracy = normalizedLevel > 69;

    if (lowAccuracy) return levelColors["distant"];
    if (averageAccuracy) return levelColors["nearby"];
    if (highAccuracy) return levelColors["correct"];

    return "bg-[#890cb7]";
    
  };

  return (
    <div data-name="entry-wrapper" className={entryItemStyles["wrapper"]}>
      <h3 className={entryItemStyles["input"]}>{shortedText(input)}</h3>
      <h3 className={entryItemStyles["output"]}>{shortedText(output)}</h3>
      <span className={entryItemStyles["label"](renderBgColorLevel())}>
        {shortedText(label.toString())}
      </span>
      <div data-name="entry-action-area" className={entryItemStyles["action"]}>
        <div
          data-name="entry-edit-icon-area"
          className={entryItemStyles["iconArea"]}
        >
          <SvgModel name="edit" width="100%" height="84%" onClick={onEdit} />
        </div>
        <div
          data-name="entry-delete-icon-area"
          className={entryItemStyles["iconArea"]}
        >
          <SvgModel
            name="delete"
            width="100%"
            height="100%"
            onClick={onDelete}
          />
        </div>
      </div>
    </div>
  );
}
