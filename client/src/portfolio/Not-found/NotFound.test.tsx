import { renderWithWrappers, screen } from "../../test-utils/utils";
import { NotFound } from "./NotFound";

describe("NoMatch", () => {
  test("renders the loading message", () => {
    renderWithWrappers(<NotFound />);
    const message = screen.getByText(/loading/i);
    expect(message).toBeInTheDocument();
  });

  test("renders the 'Not Found' heading", async () => {
    renderWithWrappers(<NotFound />);
    const heading = await screen.findByRole("heading", { name: /not found/i });
    expect(heading).toBeInTheDocument();
  });

  test("renders the 'page not found' message", async () => {
    renderWithWrappers(<NotFound />);
    const message = await screen.findByText(
      /The page you are looking for does not exist./i,
    );
    expect(message).toBeInTheDocument();
  });

  test("renders an image with an author credit", async () => {
    renderWithWrappers(<NotFound />);
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
