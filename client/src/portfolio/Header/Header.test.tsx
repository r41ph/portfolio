import { render } from "@testing-library/react";
import { Header } from "./Header";

describe("Header", () => {
  it("renders its children", () => {
    const { getByText } = render(<Header>Test Header</Header>);
    expect(getByText("Test Header")).toBeInTheDocument();
  });
});
