import { render, screen } from "@testing-library/react";
import { NotFound } from "./NotFound";

describe("NoMatch", () => {
  test("renders the 'Not Found' heading", () => {
    render(<NotFound />);
    const heading = screen.getByRole("heading", { name: /not found/i });
    expect(heading).toBeInTheDocument();
  });

  test("renders the 'page not found' message", () => {
    render(<NotFound />);
    const message = screen.getByText(
      /The page you are looking for does not exist./i,
    );
    expect(message).toBeInTheDocument();
  });

  test("renders an image with an author credit", async () => {
    render(<NotFound />);
    const image = await screen.findByAltText(/404/i);
    expect(image).toBeInTheDocument();

    const authorLink = screen.getByText(/testAuthorName/i);
    expect(authorLink).toBeInTheDocument();
    expect(authorLink).toHaveAttribute(
      "href",
      expect.stringContaining("testAuthorUrl"),
    );
  });
});
