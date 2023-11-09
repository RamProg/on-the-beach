import { render, screen, fireEvent } from "@testing-library/react";
import ShowMore from ".";

describe("ShowMore", () => {
  const props = {
    isActive: true,
    handleChange: jest.fn(),
  };

  it("should render the component with the correct props", () => {
    render(<ShowMore {...props} />);

    const textElementRead = screen.getByText("Read less");
    const textElementHotel = screen.getByText("about this hotel");
    const iconElement = screen.getByRole("img");

    expect(textElementRead).toBeInTheDocument();
    expect(textElementHotel).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveAttribute("data-icon", "chevron-down");
  });

  it("should call the handleChange function when the component is clicked", () => {
    render(<ShowMore {...props} />);

    const containerElement = screen.getByTestId("show-more-container");
    fireEvent.click(containerElement);

    expect(props.handleChange).toHaveBeenCalled();
  });

  it("should render the component with the correct text and icon when isActive is false", () => {
    render(<ShowMore isActive={false} handleChange={jest.fn()} />);

    const textElementRead = screen.getByText("Read more");
    const textElementHotel = screen.getByText("about this hotel");
    const iconElement = screen.getByRole("img");

    expect(textElementRead).toBeInTheDocument();
    expect(textElementHotel).toBeInTheDocument();
    expect(iconElement).toHaveAttribute("data-icon", "chevron-right");
  });
});
