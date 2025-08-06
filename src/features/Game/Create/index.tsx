"use client";
import DataList from "../components/DataList";
import Entries from "../components/Entries";
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
