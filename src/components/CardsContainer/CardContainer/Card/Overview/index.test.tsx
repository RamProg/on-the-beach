import { render, screen } from "@testing-library/react";
import Overview from ".";

const text = "This is an overview";

describe("Overview", () => {
  it("should render the component with the correct props", () => {
    render(<Overview text={text} isActive={true} />);

    const textElement = screen.getByText("This is an overview");

    expect(textElement).toBeInTheDocument();
  });

  it("should not render the component if isActive is false", () => {
    render(<Overview text={text} isActive={false} />);

    const containerElement = screen.queryByText("This is an overview");

    expect(containerElement).not.toBeInTheDocument();
  });
});
