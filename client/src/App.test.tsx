import { screen } from "@testing-library/react";
import App from "./App";
import { renderWithRouter } from "./test-utils/utils";

describe("App", () => {
  test("App rendering", () => {
    renderWithRouter(<App />);
    expect(screen.getByText(/mock project/i)).toBeInTheDocument();
  });

  test("App navigating", async () => {
    const { user } = renderWithRouter(<App />);
    await user.click(screen.getByText(/labs/i));
    expect(screen.getByText(/labs page/i)).toBeInTheDocument();
  });
});
