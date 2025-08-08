"use client";
import DataList from "../layouts/DataListArea";
import Entries from "../layouts/EntriesArea";
import createStyles from "./styles";

export default function Create() {
  return (
    <div 
      data-name="edit-game-container"
      className={createStyles["wrapper"]}
    >
      <Entries  />
      <DataList />
    </div>
  );
}
