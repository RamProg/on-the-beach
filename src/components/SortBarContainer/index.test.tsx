import { render, screen } from "@testing-library/react";
import { sortBarData } from "../../data/sortBarData";
import SortBarContainer from ".";

const mockSetSortType = jest.fn();

jest.mock("../../hooks/useSort/useSort", () => ({
  useSort: () => ({
    setSortType: mockSetSortType,
  }),
}));

const numberOfItems = sortBarData.length;

describe("SortBarContainer", () => {
  it("should render the SortBar component with the correct props", () => {
    render(<SortBarContainer />);

    const textElements = screen.getAllByText(/sort|sort by/);
    const typeElements = screen.getAllByText(/alphabetically|price|star rating/);

    expect(textElements.length).toBe(numberOfItems);
    expect(typeElements.length).toBe(numberOfItems);
  });

  it("should call the setSortType function with the correct argument when an item is clicked", () => {
    render(<SortBarContainer />);

    const itemElement = screen.getByText("price");
    itemElement.click();

    expect(mockSetSortType).toHaveBeenCalledWith("price");
  });
});
