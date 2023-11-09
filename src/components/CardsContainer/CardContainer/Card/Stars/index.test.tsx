import { render, screen } from "@testing-library/react";
import Stars from ".";

describe("Stars", () => {
  const props = {
    number: 3,
  };

  it("should render the component with the correct props", () => {
    render(<Stars {...props} />);

    const starsContainer = screen.getByTestId("stars-container");
    const starElements = screen.getAllByRole("img");

    expect(starsContainer).toBeInTheDocument();
    expect(starElements.length).toBe(3);

    starElements.forEach((star) => {
      expect(star).toHaveAttribute("data-icon", "star");
      expect(star).toHaveClass("checked");
    });
  });

  it("should render the component with no stars if number is 0", () => {
    render(<Stars number={0} />);

    const starsContainer = screen.getByTestId("stars-container");
    const starElements = screen.queryAllByRole("img");

    expect(starsContainer).toBeInTheDocument();
    expect(starElements.length).toBe(0);
  });
});
