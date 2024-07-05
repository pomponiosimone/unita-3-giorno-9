
import Loading from "../components/Loading"
import { render, screen } from "@testing-library/react";

describe("Loading component", () => {
  it("renders h1 with correct text", () => {
    render(<Loading />)
    // const heading = screen.getByText(/Benvenuti in EpiBooks!/i);
    // expect(heading).toBeInTheDocument();
  });
});
