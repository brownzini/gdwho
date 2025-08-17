import {
  getStoragedStatistic,
} from "@/utils/storage/statistics-storage";
import { useEffect, useState } from "react";

export default function useStatistics() {
  const [matchesTotal, setMatchesTotal] = useState<number>(0);
  const [matchesWon, setMatchesWon] = useState<number>(0);
  const [matchesCreated, setMatchesCreated] = useState<number>(0);

  useEffect(() => {
    setMatchesTotal(getStoragedStatistic("matchesTotal"));
    setMatchesWon(getStoragedStatistic("matchesWon"));
    setMatchesCreated(getStoragedStatistic("matchesCreated"));
  }, []);

  return {
    matchesTotal,
    matchesWon,
    matchesCreated,
  };
}
