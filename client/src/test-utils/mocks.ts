import { Icons } from "../../types/types";

// Works data
vi.mock("../assets/data", () => {
  return {
    works: [
      {
        name: "Mock project",
        stack: [Icons.HTML, Icons.CSS, Icons.JAVASCRIPT],
        company: "Syrox",
        image: "/images/works/green-sheep-thumbnail.jpg",
      },
    ],
  };
});
