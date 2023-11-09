import React, { useState } from "react";
import Card from "./Card";
import { Hotel } from "../../../types";

type CardContainerProps = {
  item: Hotel;
};

const CardContainer = ({ item }: CardContainerProps) => {
  const [readMore, setReadMore] = useState(false);

  const formatNumber = (number: number) => {
    return number.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const formatPassengers = (
    adults: number,
    children: number,
    infants: number
  ) => {
    const passengers = [];

    if (adults > 0) {
      passengers.push(
        <span key="adults">
          <b>{adults}</b> Adult{adults > 1 ? "s" : ""}
        </span>
      );
    }

    if (children > 0) {
      passengers.push(
        <span key="children">
          <b>{children}</b> child{children > 1 ? "ren" : ""}
        </span>
      );
    }

    if (infants > 0) {
      passengers.push(
        <span key="infants">
          <b>{infants}</b> infant{infants > 1 ? "s" : ""}
        </span>
      );
    }

    return (
      <>
        {passengers.map((passenger, index) => (
          <React.Fragment key={index}>
            {index > 0 && index < 2 ? ", " : ""}
            {index === 2 ? " & " : ""}
            {passenger}
          </React.Fragment>
        ))}
      </>
    );
  };
  return (
    <Card
      image={item.image}
      hotelName={item.hotelName}
      location={item.location}
      numberOfStars={item.stars}
      price={formatNumber(item.holidayInfo.price)}
      currency={item.holidayInfo.currency}
      passengers={formatPassengers(
        item.holidayInfo.adults,
        item.holidayInfo.children,
        item.holidayInfo.infants
      )}
      departureDate={item.holidayInfo.departureDate}
      duration={item.holidayInfo.duration}
      departureLocation={item.holidayInfo.departureLocation}
      description={item.description}
      readMore={readMore}
      setReadMore={setReadMore}
    />
  );
};

export default CardContainer;
