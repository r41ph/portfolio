import { renderWithWrappers, screen } from "../../test-utils/utils";
import { Work } from "./Work";
import { describe, expect, test } from "vitest";

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
