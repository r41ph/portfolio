import { screen } from "@testing-library/react";
import App from "./App";
import { renderWithRouter } from "./test-utils/utils";

describe("App", () => {
  test("App rendering", async () => {
    renderWithRouter(<App />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    const mockProject = await screen.findByText(/mock project/i);
    expect(mockProject).toBeInTheDocument();
  });

  test("App navigating", async () => {
    const { user } = renderWithRouter(<App />);
    await user.click(screen.getByText(/labs/i));
    expect(screen.getByText(/labs page/i)).toBeInTheDocument();
  });
});
