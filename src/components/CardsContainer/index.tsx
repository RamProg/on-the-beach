import styles from "./index.module.css";
import { hotelsData } from "../../data/hotelsData";
import CardContainer from "./CardContainer";
import { useSort } from "../../hooks/useSort/useSort";
import { useState } from "react";

const CardsContainer = () => {
  const { sortType } = useSort();

  const [sortedData] = useState(() => {
    const hotelsSortedByPrice = [...hotelsData].sort(
      (a, b) => a.holidayInfo.price - b.holidayInfo.price
    );

    const hotelsSortedByStars = [...hotelsData].sort(
      (a, b) => b.stars - a.stars
    );

    const hotelsSortedByAlpha = [...hotelsData].sort((a, b) =>
      a.hotelName.localeCompare(b.hotelName)
    );

    return {
      price: hotelsSortedByPrice,
      star: hotelsSortedByStars,
      alpha: hotelsSortedByAlpha,
    };
  });

  return (
    <main className={styles.container}>
      {sortedData[sortType].map((item) => (
        <CardContainer
          key={item.id + item.hotelName}
          item={item}
        />
      ))}
    </main>
  );
};

export default CardsContainer;
