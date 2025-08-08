"use client";

import DataList from "../layouts/DataListArea";
import Entries from "../layouts/EntriesArea";
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
