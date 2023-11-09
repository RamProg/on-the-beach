import { render, screen } from "@testing-library/react";
import { useSort, SortProvider, SortType } from "./useSort";
import { act } from "react-dom/test-utils";

type TestComponentProps = {
  newSortType: SortType;
};

type TestCases = {
  name: string;
  newSortType: SortType;
}[];

const TestComponent = ({ newSortType }: TestComponentProps) => {
  const { sortType, setSortType } = useSort();
  return (
    <div>
      <div data-testid="sort-type">{sortType}</div>
      <button onClick={() => setSortType(newSortType)}>Set Sort Type</button>
    </div>
  );
};

const WrappedComponent = ({ newSortType }: TestComponentProps) => {
  return (
    <SortProvider>
      <TestComponent newSortType={newSortType} />
    </SortProvider>
  );
};

const testCases: TestCases = [
  {
    name: "should update the sort type when setSortType is called with star",
    newSortType: "star",
  },
  {
    name: "should update the sort type when setSortType is called with alpha",
    newSortType: "alpha",
  },
];

describe("useSort", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should set the default sort type to "price"', () => {
    render(<WrappedComponent newSortType={"price"} />);

    const sortTypeElement = screen.getByTestId("sort-type");
    expect(sortTypeElement.textContent).toBe("price");
  });

  testCases.forEach(({ name, newSortType }) => {
    it(`${name}`, () => {
      render(<WrappedComponent newSortType={newSortType} />);

      const sortTypeElement = screen.getByTestId("sort-type");
      expect(sortTypeElement.textContent).toBe("price");

      const setSortTypeButton = screen.getByText("Set Sort Type");

      act(() => {
        setSortTypeButton.click();
      });

      expect(sortTypeElement.textContent).toBe(newSortType);
    });
  });
});
