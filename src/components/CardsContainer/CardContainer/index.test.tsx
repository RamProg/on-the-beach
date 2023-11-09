import { fireEvent, render, screen } from "@testing-library/react";
import CardContainer from ".";
import { Hotel } from "../../../types";

describe("CardContainer", () => {
  const mockItem: Hotel = {
    id: "1",
    image: "image.jpg",
    hotelName: "Example Hotel",
    location: "Example Location",
    stars: 4,
    holidayInfo: {
      price: 1000,
      currency: "$",
      adults: 2,
      children: 2,
      infants: 1,
      departureDate: "3rd July 2019",
      duration: "7 days",
      departureLocation: "Example Departure Location",
    },
    description: "Example Description",
  };

  it("should render the component with the correct props", () => {
    render(<CardContainer item={mockItem} />);

    const readMoreButton = screen.getByText("Read more");

    fireEvent.click(readMoreButton);

    const imageElement = screen.getByAltText("image.jpg");
    expect(imageElement).toHaveAttribute("src", "./images/image.jpg");

    const hotelNameElement = screen.getByText(mockItem.hotelName);
    expect(hotelNameElement).toBeInTheDocument();

    const locationElement = screen.getByText(mockItem.location);
    expect(locationElement).toBeInTheDocument();

    const starsElement = screen.getByTestId("stars-container");
    expect(starsElement).toBeInTheDocument();

    const priceElement = screen.getByText("$1,000.00");
    expect(priceElement).toBeInTheDocument();

    const passengerElement = screen.getByTestId("card-passengers");

    expect(passengerElement).toBeInTheDocument();

    const departureDateElement = screen.getByText("3rd July 2019");
    expect(departureDateElement).toBeInTheDocument();

    const durationElement = screen.getByText("7 days");
    expect(durationElement).toBeInTheDocument();

    const departureLocationElement = screen.getByText(
      mockItem.holidayInfo.departureLocation
    );
    expect(departureLocationElement).toBeInTheDocument();

    const descriptionElement = screen.getByText(mockItem.description);
    expect(descriptionElement).toBeInTheDocument();
  });

  it("should hide the overview by default", () => {
    render(<CardContainer item={mockItem} />);

    const descriptionElement = screen.queryByText(mockItem.description);
    expect(descriptionElement).not.toBeInTheDocument();
  });

  it("should display the right passengers info", () => {
    render(<CardContainer item={mockItem} />);

    const passengerElement = screen.getByTestId("card-passengers");

    expect(passengerElement).toHaveTextContent(
      "2 Adults, 2 children & 1 infant"
    );
  });
});
