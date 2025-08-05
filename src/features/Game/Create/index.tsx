"use client";
import DataList from "../DataList";
import Entries from "../Entries";
import createStyles from "./styles";

export default function Create() {
  return (
    <div className={createStyles["wrapper"]}>
      <Entries />
      <DataList />
    </div>
  );
}
