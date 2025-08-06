"use client";
import DataList from "../layouts/DataList";
import Entries from "../layouts/Entries";
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
