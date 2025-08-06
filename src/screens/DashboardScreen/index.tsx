
import Header from "../../shared/Header";

import Card from "@/features/Dashboard/Card";
import Statistics from "@/features/Dashboard/Statistics";
import dashboardScreenStyles from "./styles";

export default function DashboardScreen() {
  return (
    <div
      data-name="dashboard-screen-container" 
      className={dashboardScreenStyles["container"]}
    >
      <Header
        nameTitle="Gabriel"
        todayTitle="Hoje é segunda feira , 11/07/2025"
      />
      <Card />
      <Statistics />
    </div>
  );
}
