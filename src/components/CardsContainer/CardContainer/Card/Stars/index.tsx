import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import styles from "./index.module.css";

type StarsProps = {
  number: number;
};

const Stars = ({ number }: StarsProps) => {
  const stars = new Array(number).fill(0);

  return (
    <div>
      {stars.map((_, index) => (
        <FontAwesomeIcon icon={faStar} className={styles.checked} key={index} />
      ))}
    </div>
  );
};

export default Stars;
