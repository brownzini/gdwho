import Header from "../../shared/Header";
import Card from "@/features/Dashboard/Card";

export default function MainScreen() {
  return (
    <div className="w-[100%] h-[100%] flex flex-col justify-center items-center">
      <Header
        nameTitle="Gabriel"
        todayTitle="Hoje é segunda feira , 11/07/2025"
      />
      <Card />
    </div>
  );
}
