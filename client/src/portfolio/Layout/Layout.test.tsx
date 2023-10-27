import { Layout } from "./Layout";
import { renderWithWrappers, screen } from "../../test-utils/utils";

describe("Layout", () => {
  test("renders the header", () => {
    renderWithWrappers(<Layout />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  test("renders the footer", () => {
    renderWithWrappers(<Layout />);
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  test("renders the dark mode toggle", () => {
    renderWithWrappers(<Layout />);
    expect(screen.queryByLabelText(/toggle dark mode/i)).toBeInTheDocument();
  });
});
