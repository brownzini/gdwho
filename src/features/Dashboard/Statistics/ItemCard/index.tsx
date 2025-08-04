import SvgModel from "@/components/svg";
import itemCardStyles from "./styles";

interface Props {
    description:string;
    value:number;
    iconName:string;
}

export default function ItemCard({ description, value, iconName }:Props) {
  return (
    <div className={itemCardStyles["cardContent"]}>
      <div className={itemCardStyles["cardHeader"]}>
        <SvgModel name={iconName} width="50%" height="50%" />
      </div>
      <div className={itemCardStyles["cardBody"]}>
        <p className={itemCardStyles["cardBodyTitle"]}>{description}</p>
      </div>
      <div className={itemCardStyles["cardFooter"]}>
        <h2 className={itemCardStyles["cardFooterTitle"]}>{value}</h2>
      </div>
    </div>
  );
}
