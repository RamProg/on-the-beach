import { IMAGES_PATH } from "../../../../constants";
import Button from "./Button";
import Overview from "./Overview";
import ShowMore from "./ShowMore";
import Stars from "./Stars";
import styles from "./index.module.css";

type CardProps = {
  image: string;
  hotelName: string;
  location: string;
  numberOfStars: number;
  price: string;
  currency: string;
  passengers: React.ReactNode;
  departureDate: string;
  duration: string;
  departureLocation: string;
  description: string;
  readMore: boolean;
  setReadMore: React.Dispatch<React.SetStateAction<boolean>>;
};

const Card = ({
  image,
  hotelName,
  location,
  numberOfStars,
  price,
  currency,
  passengers,
  departureDate,
  duration,
  departureLocation,
  description,
  readMore,
  setReadMore,
}: CardProps) => {
  const imagePath = `${IMAGES_PATH}/${image}`;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img src={imagePath} alt={image} className={styles.hotelImage} />
          <ShowMore
            isActive={readMore}
            handleChange={() => setReadMore((prev) => !prev)}
          />
        </div>
        <div className={styles.description}>
          <h1 className={styles.title}>{hotelName}</h1>
          <h2 className={styles.subtitle}>{location}</h2>
          <Stars number={numberOfStars} />
          <div className={styles.detail}>{passengers}</div>
          <p className={styles.detail}>
            <b>{departureDate}</b> for <b>{duration}</b>
          </p>
          <p className={styles.detail}>
            departing from <b>{departureLocation}</b>
          </p>
          <div className={styles.buttonContainer}>
            <Button price={price} currency={currency} label="Book now" />
          </div>
        </div>
      </div>
      <Overview text={description} isActive={readMore} />
    </div>
  );
};

export default Card;
