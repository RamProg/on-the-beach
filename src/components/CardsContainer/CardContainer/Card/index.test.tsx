import { render, screen, fireEvent } from "@testing-library/react";
import { IMAGES_PATH } from "../../../../constants";
import Card from ".";

describe("Card", () => {
  const props = {
    image: "hotel.jpg",
    hotelName: "Hotel Name",
    location: "Location",
    numberOfStars: 4,
    price: "100",
    currency: "USD",
    passengers: <div>Passengers</div>,
    departureDate: "2022-01-01",
    duration: "7 days",
    departureLocation: "Departure Location",
    description: "Description",
    readMore: true,
    setReadMore: jest.fn(),
  };

  it("should render the component with the correct props", () => {
    render(<Card {...props} />);

    const imageElement = screen.getByAltText(props.image);
    const showMoreElement = screen.getByTestId("show-more-container");
    const titleElement = screen.getByText(props.hotelName);
    const subtitleElement = screen.getByText(props.location);
    const starsElement = screen.getByTestId("stars-container");
    const passengersElement = screen.getByText("Passengers");
    const departureDateElement = screen.getByText(props.departureDate);
    const durationElement = screen.getByText(props.duration);
    const departureLocationElement = screen.getByText(props.departureLocation);
    const buttonElement = screen.getByText("Book now");
    const overviewElement = screen.getByText("Overview");

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute(
      "src",
      `${IMAGES_PATH}/${props.image}`
    );
    expect(showMoreElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(subtitleElement).toBeInTheDocument();
    expect(starsElement).toBeInTheDocument();
    expect(passengersElement).toBeInTheDocument();
    expect(departureDateElement).toBeInTheDocument();
    expect(durationElement).toBeInTheDocument();
    expect(departureLocationElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
    expect(overviewElement).toBeInTheDocument();
  });

  it("should call the setReadMore function when the ShowMore component is clicked", () => {
    render(<Card {...props} />);

    const showMoreElement = screen.getByTestId("show-more-container");
    fireEvent.click(showMoreElement);

    expect(props.setReadMore).toHaveBeenCalled();
  });
});
