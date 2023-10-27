import { renderWithWrappers, screen } from "../../test-utils/utils";
import { expect, test } from "vitest";
import { Work } from "./Work";

describe("Work component", () => {
  test("renders loading message when projects are not loaded", () => {
    renderWithWrappers(<Work />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("renders projects when projects are loaded", async () => {
    renderWithWrappers(<Work />);
    const project = await screen.findByText(/Mock project/i);
    expect(project).toBeInTheDocument();
  });
});
