import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./index.module.css";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

type SortItemProps = {
  text: string;
  type: string;
  icon: IconDefinition;
  isSelected: boolean;
};

const SortItem = ({ text, type, icon, isSelected }: SortItemProps) => {
  return (
    <div className={`${styles.container} ${isSelected && styles.selected}`} data-testid="sort-item-container">
      <p className={`${isSelected ? styles.selectedTitle : styles.title}`}>
        {text} <span className={styles.boldText}>{type}</span>
      </p>
      <div className={styles.iconContainer}>
        <FontAwesomeIcon
          title="icon"
          icon={icon}
          className={`${isSelected ? styles.selectedIcon : styles.icon}`}
        />
      </div>
    </div>
  );
};

export default SortItem;
