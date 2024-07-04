import Welcome from "../components/Welcome";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Welcome component", () => {
  it("renders h1 with correct text", () => {
    render(<Welcome />);
    const heading = screen.getByText(/Benvenuti in EpiBooks!/i);
    expect(heading).toBeInTheDocument();
  });
});
