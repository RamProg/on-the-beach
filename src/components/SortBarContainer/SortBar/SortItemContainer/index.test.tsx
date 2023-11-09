import { render, screen } from "@testing-library/react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import SortItemContainer from ".";

describe("SortItemContainer", () => {
  it("should render the SortItem component with the correct props", () => {
    render(
      <SortItemContainer
        text="Sort by"
        type="Price"
        icon={faStar}
        isSelected={false}
      />
    );

    const textElement = screen.getByText("Sort by");
    const typeElement = screen.getByText("Price");
    const iconElement = screen.getByRole("img");

    expect(textElement).toBeInTheDocument();
    expect(typeElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
  });
});
