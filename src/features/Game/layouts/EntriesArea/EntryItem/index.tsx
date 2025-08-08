import SvgModel from "@/components/svg";
import entryItemStyles from "./entryItemStyles";

interface Props {
  input: string;
  output: string;
  label: number;
}

export default function EntryItem({ input, output, label }: Props) {
  return (
    <div
      data-name="entry-wrapper" 
      className={entryItemStyles["wrapper"]}
    >
      <h3
        data-name="entry-input-text" 
        className={entryItemStyles["input"]} 
        title="Esse é o tooltip"
      >
        {input}
      </h3>
      <h3
        data-name="entry-output-text"  
        className={entryItemStyles["output"]}
      >
        {output}
      </h3>
      <span 
        data-name="entry-level-label" 
        className={entryItemStyles["label"]}
      >
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
            height="75%" 
            onClick={() => console.log("")}
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
            onClick={() => console.log("")}
          />
        </div>
      </div>
    </div>
  );
}
