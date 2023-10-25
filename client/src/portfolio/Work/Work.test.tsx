// import { render, screen, waitFor } from "@testing-library/react";
import { render, screen } from "../../test-utils/utils";
import { expect, test } from "vitest";
import { AppContext } from "../Layout/Layout";
import { Work } from "./Work";
import { Icons } from "../../../types/types";

// const mockProjects = [
//   {
//     name: "Project 1",
//     description: "Description 1",
//     image: "image1.jpg",
//     technologies: ["Tech 1", "Tech 2"],
//     githubLink: "https://github.com/project1",
//     liveLink: "https://project1.com",
//   },
//   {
//     name: "Project 2",
//     description: "Description 2",
//     image: "image2.jpg",
//     technologies: ["Tech 3", "Tech 4"],
//     githubLink: "https://github.com/project2",
//     liveLink: "https://project2.com",
//   },
// ];

// jest.mock("../../utils/api", () => ({
//   get: jest.fn(() => Promise.resolve({ data: { projects: mockProjects } })),
// }));

describe("Work component", () => {
  // test("renders loading message when projects are not loaded", () => {
  //   render(<Work />);
  //   expect(screen.getByText("Loading...")).toBeInTheDocument();
  // });

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

  // test("fetches projects when projects are not loaded", async () => {
  //   const setState = vi.fn();
  //   render(
  //     <AppContext.Provider
  //       value={{
  //         state: {
  //           projects: [],
  //           labs: [],
  //         },
  //         setState,
  //       }}
  //     >
  //       <Work />
  //     </AppContext.Provider>,
  //   );

  //   expect(setState).toHaveBeenCalledOnce();
  // });
});
