import { render } from "@testing-library/react";
import { Header } from "./Header";
import { describe, expect, test } from "vitest";

describe("Header", () => {
  test("renders its children", () => {
    const { getByText } = render(<Header>Test Header</Header>);
    expect(getByText("Test Header")).toBeInTheDocument();
  });
});
