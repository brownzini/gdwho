"use client";
import DataList from "../components/DataList";
import Entries from "../components/Entries";
import createStyles from "./styles";

export default function Create() {
  return (
    <div className={createStyles["wrapper"]}>
      <Entries />
      <DataList />
    </div>
  );
}
