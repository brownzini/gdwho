"use client";

import DataList from "../DataList";
import Entries from "../Entries";
import editStyles from "./styles";

export default function Edit() {
  return (
    <div className={editStyles["wrapper"]}>
      <Entries readMode={true} />
      <DataList />
    </div>
  );
}
