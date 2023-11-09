type HolidayInfo = {
  adults: number;
  children: number;
  infants: number;
  departureDate: string;
  duration: string;
  departureLocation: string;
  price: number;
  currency: string;
};

export type Hotel = {
  id: string;
  hotelName: string;
  location: string;
  stars: number;
  description: string;
  image: string;
  holidayInfo: HolidayInfo;
};
