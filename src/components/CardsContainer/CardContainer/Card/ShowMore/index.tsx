import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./index.module.css";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

type ShowMoreProps = {
  isActive: boolean;
  handleChange: () => void;
};

const ShowMore = ({ isActive = true, handleChange }: ShowMoreProps) => {
  const chevronIcon = isActive ? faChevronDown : faChevronRight;

  return (
    <div className={styles.container} onClick={handleChange}>
      <span className={styles.title}>
        <span className={styles.read}>Read {isActive ? "less" : "more"}</span>
        about this hotel
      </span>
      <div className={styles.iconContainer}>
        <FontAwesomeIcon icon={chevronIcon} className={styles.icon} size="lg" />
      </div>
    </div>
  );
};

export default ShowMore;
