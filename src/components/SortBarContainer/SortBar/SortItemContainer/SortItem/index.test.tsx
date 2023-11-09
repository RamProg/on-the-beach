import { render, screen } from "@testing-library/react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import SortItem from ".";

const Component = ({ isSelected = false }) => (
  <SortItem text="Sort by" type="Price" icon={faStar} isSelected={isSelected} />
);

describe("SortItem", () => {
  it("should render the text and type", () => {
    render(<Component />);

    const textElementSort = screen.getByText("Sort by");
    const typeElementType = screen.getByText("Price");

    expect(textElementSort).toBeInTheDocument();
    expect(typeElementType).toBeInTheDocument();
  });

  it("should render the icon", () => {
    render(<Component />);

    const iconElement = screen.getByTitle("icon");

    expect(iconElement).toBeInTheDocument();
  });

  it("should apply the selected styles when isSelected is true", () => {
    render(<Component isSelected={true} />);

    const containerElement = screen.getByTestId("sort-item-container");
    const titleElementFirst = screen.getByText("Sort by");
    const titleElementSecond = screen.getByText("Price");
    const iconElement = screen.getByRole("img");

    expect(containerElement).toHaveClass("selected");
    expect(titleElementFirst).toHaveClass("selectedTitle");
    expect(titleElementSecond).toHaveClass("boldText");
    expect(iconElement).toHaveClass("selectedIcon");
  });

  it("should not apply the selected styles when isSelected is false", () => {
    render(<Component isSelected={false} />);

    const containerElement = screen.getByTestId("sort-item-container");
    const titleElementFirst = screen.getByText("Sort by");
    const titleElementSecond = screen.getByText("Price");
    const iconElement = screen.getByRole("img");

    expect(containerElement).not.toHaveClass("selected");
    expect(titleElementFirst).toHaveClass("title");
    expect(titleElementSecond).toHaveClass("boldText");
    expect(iconElement).toHaveClass("icon");
  });
});
