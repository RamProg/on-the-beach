import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import SortItemContainer from "./SortItemContainer";
import styles from "./index.module.css";

type SortBarProps = {
  items: Array<{
    text: string;
    type: string;
    icon: IconDefinition;
  }>;
  itemSelectedIdx: number;
  setItemSelectedIdx: (idx: number) => void;
};

const SortBar = ({
  items,
  itemSelectedIdx,
  setItemSelectedIdx,
}: SortBarProps) => {
  return (
    <div className={styles.container}>
      {items.map((item, idx) => {
        const isLastItem = idx === items.length - 1;

        return (
          <div key={item.type} onClick={() => setItemSelectedIdx(idx)}>
            <SortItemContainer
              text={item.text}
              type={item.type}
              icon={item.icon}
              isSelected={idx === itemSelectedIdx}
            />
            {!isLastItem && <div className={styles.divider} />}
          </div>
        );
      })}
    </div>
  );
};

export default SortBar;
