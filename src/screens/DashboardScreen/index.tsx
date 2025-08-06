
import Header from "../../shared/Header";

import dashboardScreenStyles from "./styles";
import Dashboard from "@/features/Dashboard";

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
      <Dashboard />
    </div>
  );
}
