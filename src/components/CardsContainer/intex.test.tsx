import { render, screen } from "@testing-library/react";
import CardsContainer from ".";

describe("CardsContainer", () => {
  it("renders the cards container", () => {
    render(<CardsContainer />);
    const cardsContainer = screen.getByRole("main");
    expect(cardsContainer).toBeInTheDocument();
  });

  it("renders the right number of cards", () => {
    render(<CardsContainer />);
    const cards = screen.getAllByTestId("card");
    expect(cards).toHaveLength(3);
  });

  it("renders the cards initially ordered by price", () => {
    render(<CardsContainer />);
    const cards = screen.getAllByTestId("card");

    expect(cards[0]).toHaveTextContent("£499.99");
    expect(cards[1]).toHaveTextContent("£696.80");
    expect(cards[2]).toHaveTextContent("£1,136.50");
  });
});
