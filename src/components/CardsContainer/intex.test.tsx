import { render, screen } from "@testing-library/react";
import CardsContainer from ".";

describe("CardsContainer", () => {
  it("renders the cards container", () => {
    render(<CardsContainer />);
    const cardsContainer = screen.getByRole("main");
    expect(cardsContainer).toBeInTheDocument();
  });

  it.skip("renders the cards", () => {
    render(<CardsContainer />);
    const cards = screen.getAllByTestId("card");
    expect(cards).toHaveLength(3);
  });

  it.skip("renders the card titles", () => {
    render(<CardsContainer />);
    const cardTitles = screen.getAllByTestId("card-title");
    expect(cardTitles[0]).toHaveTextContent("Card 1");
    expect(cardTitles[1]).toHaveTextContent("Card 2");
    expect(cardTitles[2]).toHaveTextContent("Card 3");
  });
});
