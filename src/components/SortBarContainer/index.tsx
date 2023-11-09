import { useState } from "react";
import { sortBarData as items } from "../../data/sortBarData";
import SortBar from "./SortBar";
import styles from "./index.module.css";
import { useSort } from "../../hooks/useSort/useSort";

const SortBarContainer = () => {
  const [itemSelectedIdx, setItemSelectedIdx] = useState<number>(1);
  const { setSortType } = useSort();

  const handleItemSelected = (idx: number) => {
    setItemSelectedIdx(idx);
    const sortIdx = idx === 0 ? "alpha" : idx === 1 ? "price" : "star";
    setSortType(sortIdx);
  };

  return (
    <aside className={styles.container}>
      <SortBar
        items={items}
        itemSelectedIdx={itemSelectedIdx}
        setItemSelectedIdx={handleItemSelected}
      />
    </aside>
  );
};

export default SortBarContainer;
