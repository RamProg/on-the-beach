import styles from "./index.module.css";

type ButtonProps = {
  price: string;
  currency: string;
  label: string;
};

const Button = ({ price, currency, label }: ButtonProps) => {
  return (
    <button className={styles.button}>
      <p className={styles.buttonText}>{label}</p>
      <p className={styles.price}>{`${currency}${price}`}</p>
    </button>
  );
};

export default Button;
