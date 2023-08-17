import { Icons } from "../../types/types";

// Projects data
vi.mock("../assets/data", () => {
  return {
    projects: [
      {
        name: "Mock project",
        stack: [Icons.HTML, Icons.CSS, Icons.JAVASCRIPT],
        company: "Syrox",
        image: "/src/assets/images/projects/green-sheep-thumbnail.jpg",
      },
    ],
  };
});
