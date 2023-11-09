import styles from "./index.module.css";

type OverviewProps = {
  text: string;
  isActive: boolean;
};

const Overview = ({ text, isActive = true }: OverviewProps) => {
  if (!isActive) return null;

  return (
    <div className={styles.container}>
      <h3 className={styles.overview}>Overview</h3>
      <p>{text}</p>
    </div>
  );
};

export default Overview;
