import { Hotel } from "../types";

export const hotelsData: Hotel[] = [
  {
    id: "hotel-ibero-salome",
    hotelName: "Iberostar Grand Salome",
    location: "Costa Adeje, Tenerife",
    stars: 5,
    description:
      "The Iberostar Grand Salome has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Golf courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea.",
    image: "hotel-image-1.png",
    holidayInfo: {
      adults: 2,
      children: 2,
      infants: 1,
      departureDate: "3rd July 2019",
      duration: "7 days",
      departureLocation: "East Midlands",
      price: 1136.5,
      currency: "£",
    },
  },
  {
    id: "hotel-aguamarina-golf",
    hotelName: "Aguamarina Golf Hotel",
    location: "Costa Adeje, Tenerife",
    stars: 4,
    description:
      "The Aguamarina Golf Hotel has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Golf courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea.",
    image: "hotel-image-2.png",
    holidayInfo: {
      adults: 2,
      children: 1,
      infants: 0,
      departureDate: "27th May 2019",
      duration: "7 days",
      departureLocation: "Liverpool",
      price: 696.8,
      currency: "£",
    },
  },
  {
    id: "hotel-piramides-resort",
    hotelName: "Las Piramides Resort",
    location: "Costa Adeje, Tenerife",
    stars: 3,
    description:
      "Las Piramides Resort has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Golf courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea.",
    image: "hotel-image-3.png",
    holidayInfo: {
      adults: 2,
      children: 2,
      infants: 0,
      departureDate: "3rd July 2019",
      duration: "7 days",
      departureLocation: "Manchester",
      price: 499.99,
      currency: "£",
    },
  },
];
