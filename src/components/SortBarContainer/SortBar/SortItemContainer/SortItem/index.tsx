import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./index.module.css";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

type SortItemType = {
  text: string;
  type: string;
  icon: IconDefinition;
  isSelected: boolean;
};

const SortItem = ({ text, type, icon, isSelected }: SortItemType) => {
  return (
    <div className={`${styles.container} ${isSelected && styles.selected}`}>
      <p className={`${isSelected ? styles.selectedTitle : styles.title}`}>
        {text} <span className={styles.boldText}>{type}</span>
      </p>
      <div className={styles.iconContainer}>
        <FontAwesomeIcon
          icon={icon}
          className={`${isSelected ? styles.selectedIcon : styles.icon}`}
        />
      </div>
    </div>
  );
};

export default SortItem;
