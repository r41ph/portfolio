import App from "./App";
import { renderWithWrappers, screen, userEvent } from "./test-utils/utils";

describe("App", () => {
  test("App rendering", async () => {
    renderWithWrappers(<App />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    const mockProject = await screen.findByText(/mock project/i);
    expect(mockProject).toBeInTheDocument();
  });

  test("App navigating", async () => {
    renderWithWrappers(<App />);
    await userEvent.click(screen.getByText(/labs/i));
    expect(screen.getByText(/mock lab/i)).toBeInTheDocument();
  });
});
