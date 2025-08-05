
import Header from "../../shared/Header";

import Card from "@/features/Dashboard/Card";
import Statistics from "@/features/Dashboard/Statistics";

export default function DashboardScreen() {
  return (
    <div className="
      w-[100%] h-[100%]
      flex flex-col justify-center items-center gap-3 lg:gap-7 xl:gap-3
    ">
      <Header
        nameTitle="Gabriel"
        todayTitle="Hoje é segunda feira , 11/07/2025"
      />
      <Card />
      <Statistics />
    </div>
  );
}
