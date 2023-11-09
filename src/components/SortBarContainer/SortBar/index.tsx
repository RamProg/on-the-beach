import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import SortItemContainer from "./SortItemContainer";
import styles from "./index.module.css";

type IconProps = {
  text: string;
  type: string;
  icon: IconDefinition;
};

type SortBarProps = {
  items: IconProps[];
  itemSelectedIdx: number;
  setItemSelectedIdx: (idx: number) => void;
};

const SortBar = ({
  items,
  itemSelectedIdx,
  setItemSelectedIdx,
}: SortBarProps) => {
  return (
    <aside className={styles.container}>
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
    </aside>
  );
};

export default SortBar;
