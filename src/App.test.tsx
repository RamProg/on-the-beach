import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("renders app container", () => {
    render(<App />);
    const appContainer = screen.getByTestId("app-container");
    expect(appContainer).toBeInTheDocument();
  });
  test("renders SortBarContainer", () => {
    render(<App />);
    const sortBarContainer = screen.getByRole("complementary");
    expect(sortBarContainer).toBeInTheDocument();
  });
  test("renders spacer", () => {
    render(<App />);
    const spacer = screen.getByTestId("app-container-spacer");
    expect(spacer).toBeInTheDocument();
  });

  test("renders cards container", () => {
    render(<App />);
    const cardsContainer = screen.getByRole("main");
    expect(cardsContainer).toBeInTheDocument();
  });
});
