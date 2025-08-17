"use client"

import ScreenHeader from "../../shared/ScreenHeader";

import dashboardScreenStyles from "./styles";
import Dashboard from "@/features/Dashboard";

interface Props {
  username:string;
}

export default function DashboardScreen({ username }:Props) {
  return (
    <div
      data-name="dashboard-screen-container" 
      className={dashboardScreenStyles["container"]}
    >
      <ScreenHeader
        nameTitle={username}
      />
      <Dashboard />
    </div>
  );
}
