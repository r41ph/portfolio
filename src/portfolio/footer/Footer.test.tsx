import { render, screen } from "../../test-utils/utils";
import { Footer } from "./Footer";

describe("Footer", () => {
  test("should render the icons pointing to the right URLs", () => {
    render(<Footer />);
    const githubLink = screen.getByRole("link", {
      name: "Link to r41ph github account",
    });
    const codepenLink = screen.getByRole("link", {
      name: "Link to r41ph codepen account",
    });
    const contactLink = screen.getByRole("link", {
      name: "Send email to r41ph",
    });
    expect(githubLink).toBeInTheDocument();
    expect(codepenLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();

    expect(githubLink.getAttribute("href")).toBe("https://github.com/r41ph");
    expect(codepenLink.getAttribute("href")).toBe("https://codepen.io/r41ph");
    expect(contactLink.getAttribute("href")).toContain("mailto:jobs@rgalan.es");
  });
});
