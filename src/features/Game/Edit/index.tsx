"use client";

import DataList from "../layouts/DataList";
import Entries from "../layouts/Entries";
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
