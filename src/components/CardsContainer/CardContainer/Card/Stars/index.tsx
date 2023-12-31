import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import styles from "./index.module.css";

type StarsProps = {
  number: number;
};

const Stars = ({ number }: StarsProps) => {
  const stars = new Array(number).fill(0);

  return (
    <div data-testid="stars-container">
      {stars.map((_, index) => (
        <FontAwesomeIcon
          title="icon"
          icon={faStar}
          className={styles.checked}
          key={index}
        />
      ))}
    </div>
  );
};

export default Stars;
