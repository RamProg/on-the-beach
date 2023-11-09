import React from "react";
import { render, screen } from "@testing-library/react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import SortBar from ".";

const items = [
  { text: "Sort by", type: "Price", icon: faStar },
  { text: "Sort by", type: "Rating", icon: faStar },
  { text: "Sort by", type: "Date", icon: faStar },
];

const setItemSelectedIdx = jest.fn();

const Component = () => (
  <SortBar items={items} itemSelectedIdx={0} setItemSelectedIdx={setItemSelectedIdx} />
);

describe("SortBar", () => {
  it("should render the SortItemContainer components with the correct props", () => {
    render(<Component />);

    const textElements = screen.getAllByText("Sort by");
    const typeElements = screen.getAllByText(/Price|Rating|Date/);
    const iconElements = screen.getAllByRole("img");

    expect(textElements.length).toBe(items.length);
    expect(typeElements.length).toBe(items.length);
    expect(iconElements.length).toBe(items.length);
  });

  it("should call the setItemSelectedIdx function when an item is clicked", () => {
    render(<Component />);

    const itemElement = screen.getByText("Price");
    itemElement.click();

    expect(setItemSelectedIdx).toHaveBeenCalledWith(0);
  });
});
