import SvgModel from "@/components/svg";
import entryItemStyles from "./entryItemStyles";

interface Props {
  input: string;
  output: string;
  label: number | string;
  onEdit: () => void;
  onDelete: () => void;
}

export default function EntryItem({
  input,
  output,
  label,
  onEdit,
  onDelete,
}: Props) {
  return (
    <div data-name="entry-wrapper" className={entryItemStyles["wrapper"]}>
      <h3 className={entryItemStyles["input"]}>
        {input}
      </h3>
      <h3 className={entryItemStyles["output"]}>
        {output}
      </h3>
      <span className={entryItemStyles["label"]}>
        {label}
      </span>
      <div 
        data-name="entry-action-area" 
        className={entryItemStyles["action"]}
      >
        <div
          data-name="entry-edit-icon-area"
          className={entryItemStyles["iconArea"]}
        >
          <SvgModel 
            name="edit" 
            width="100%" 
            height="84%" 
            onClick={onEdit} 
          />
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
