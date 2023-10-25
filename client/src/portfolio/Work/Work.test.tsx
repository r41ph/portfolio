import { render, screen } from "../../test-utils/utils";
import { expect, test } from "vitest";
import { AppContext } from "../Layout/Layout";
import { Work } from "./Work";
import { Icons } from "../../../types/types";

describe("Work component", () => {
  test("renders loading message when projects are not loaded", () => {
    render(<Work />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("renders projects when projects are loaded", async () => {
    const setState = vi.fn();
    render(
      <AppContext.Provider
        value={{
          state: {
            projects: [
              {
                name: "Mock project",
                stack: [Icons.JAVASCRIPT],
                company: "Syrox",
                image: "/images/projects/green-sheep-thumbnail.jpg",
                description: "Mock description",
              },
            ],
            labs: [],
          },
          setState,
        }}
      >
        <Work />
      </AppContext.Provider>,
    );
    const proj = await screen.findByText(/Mock project/i);
    expect(proj).toBeInTheDocument();
  });

  test("fetches projects when projects are not loaded and update state", async () => {
    const setState = vi.fn();
    render(
      <AppContext.Provider
        value={{
          state: {
            projects: [],
            labs: [],
          },
          setState,
        }}
      >
        <Work />
      </AppContext.Provider>,
    );

    await vi.waitFor(() => {
      expect(setState).toHaveBeenCalled();
    });
  });
});
