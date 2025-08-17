import {
    MATCHES_CREATED_STORAGE,
  MATCHES_TOTAL_STORAGE,
  MATCHES_WON_STORAGE,
} from "@/constants/storageList";
import { HandleType } from "@/types/storageTypes";

const getHandle = {
  matchesTotal: MATCHES_TOTAL_STORAGE,
  matchesWon: MATCHES_WON_STORAGE,
  matchesCreated: MATCHES_CREATED_STORAGE,
};

export const getStoragedStatistic = (type: HandleType) => {
  const storagedData = localStorage.getItem(getHandle[type]);
  if (storagedData) {
    return parseInt(storagedData);
  } else {
    return 0;
  }
};

export const increaseStoragedStatistic = (type: HandleType) => {
  const storagedData = getStoragedStatistic(type);
  const newStorageData = (storagedData+1).toString();
  localStorage.setItem(getHandle[type], newStorageData);
}