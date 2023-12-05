import { IconType } from "../../types/types";

// Works data
vi.mock("../assets/data", () => {
  return {
    works: [
      {
        name: "Mock project",
        stack: [IconType.HTML, IconType.CSS, IconType.JAVASCRIPT],
        company: "Syrox",
        image: "/images/works/green-sheep-thumbnail.jpg",
      },
    ],
  };
});
