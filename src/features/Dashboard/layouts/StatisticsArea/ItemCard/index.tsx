import SvgModel from "@/components/svg";
import itemCardStyles from "./styles";

interface Props {
    description:string;
    value:number;
    iconName:string;
}

export default function ItemCard({ description, value, iconName }:Props) {
  return (
    <div
      data-name="dashboard-statistics-card-content" 
      className={itemCardStyles["cardContent"]}
    >
      <div
        data-name="dashboard-statistics-card-header" 
        className={itemCardStyles["cardHeader"]}
      >
        <SvgModel 
          name={iconName} 
          width="50%"
          height="50%" 
        />
      </div>
      <div
        data-name="dashboard-statistics-card-body" 
        className={itemCardStyles["cardBody"]}
      >
        <p 
          data-name="dashboard-statistics-card-body-description"
          className={itemCardStyles["cardBodyDescription"]}
        >
          {description}
        </p>
      </div>
      <div
        data-name="dashboard-statistics-card-footer" 
        className={itemCardStyles["cardFooter"]}
      >
        <h2
          data-name="dashboard-statistics-card-footer-title" 
          className={itemCardStyles["cardFooterTitle"]}
        >
          {value}
        </h2>
      </div>
    </div>
  );
}
