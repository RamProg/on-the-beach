import { render, screen } from "@testing-library/react";
import Button from ".";

const props = {
  price: "9.99",
  currency: "$",
  label: "Buy Now",
};

const Component = () => <Button {...props} />;

describe("Button", () => {
  it("should render the button with the correct props", () => {
    render(<Component />);

    const labelElement = screen.getByText("Buy Now");
    const priceElement = screen.getByText("$9.99");

    expect(labelElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
  });

  it("should render the button with the correct styles", () => {
    render(<Component />);

    const buttonElement = screen.getByRole("button");

    expect(buttonElement).toHaveClass("button");
  });
});
