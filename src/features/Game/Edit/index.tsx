"use client";

import DataList from "../components/DataList";
import Entries from "../components/Entries";
import editStyles from "./styles";

export default function Edit() {
  return (
    <div
      data-name="edit-game-container"  
      className={editStyles["wrapper"]}
    >
      <Entries readMode={true} />
      <DataList />
    </div>
  );
}
