import { Project, Icons, ProjectType } from "../../types/types";

export const projects: Project[] = [
  {
    name: "Little Green Sheep",
    stack: [
      Icons.HTML,
      Icons.CSS,
      Icons.JAVASCRIPT,
      Icons.JEST,
      Icons.REDUX,
      Icons.RTL,
      Icons["STYLED-COMPONENTS"],
    ],
    url: "https://google.com/",
    company: "Syrox",
    image: "/images/projects/green-sheep-thumbnail.jpg",
    description: "",
  },
  {
    name: "Little Green Sheep",
    stack: [
      Icons.HTML,
      Icons.CSS,
      Icons.JAVASCRIPT,
      Icons.JEST,
      Icons.REDUX,
      Icons.RTL,
      Icons["STYLED-COMPONENTS"],
    ],
    url: "https://google.com/",
    company: "Syrox",
    image: "/images/projects/green-sheep-thumbnail.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    name: "Little Green Sheep",
    stack: [
      Icons.HTML,
      Icons.CSS,
      Icons.JAVASCRIPT,
      Icons.JEST,
      Icons.REDUX,
      Icons.RTL,
      Icons["STYLED-COMPONENTS"],
    ],
    type: ProjectType.WEBSITE,
    url: "https://google.com/",
    company: "Syrox",
    image: "/images/projects/green-sheep-thumbnail.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];
