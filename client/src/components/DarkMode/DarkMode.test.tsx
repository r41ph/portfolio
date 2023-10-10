import { userEvent, render, screen } from "../../test-utils/utils";
import { DarkMode } from "./DarkMode";

describe("DarkMode", () => {
  const user = userEvent.setup();
  test("should render the dark mode button", () => {
    render(<DarkMode />);
    const darkModeButton = screen.getByRole("button", {
      name: "Toggle dark mode",
    });
    expect(darkModeButton).toBeInTheDocument();
  });
  test("should toggle dark mode", async () => {
    render(<DarkMode />);
    const darkModeButton = screen.getByRole("button", {
      name: "Toggle dark mode",
    });
    expect(darkModeButton).toBeInTheDocument();
    expect(document.documentElement.classList.contains("dark")).toBe(false);
    await user.click(darkModeButton);
    expect(document.documentElement.classList.contains("dark")).toBe(true);
    await user.click(darkModeButton);
    expect(document.documentElement.classList.contains("dark")).toBe(false);
  });
});
