import { render, screen } from "../../test-utils/utils";
import { Footer } from "./Footer";

describe("Footer", () => {
  test("should render the icons pointing to the right URLs", () => {
    render(<Footer />);
    const githubLink = screen.getByTestId(/github-link/i);
    const codepenLink = screen.getByTestId(/codepen-link/i);
    const contactLink = screen.getByTestId(/mailto-link/i);
    expect(githubLink).toBeInTheDocument();
    expect(codepenLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();

    expect(githubLink.getAttribute("href")).toBe("https://github.com/r41ph");
    expect(codepenLink.getAttribute("href")).toBe("https://codepen.io/r41ph");
    expect(contactLink.getAttribute("href")).toContain("mailto:jobs@rgalan.es");
  });
});
