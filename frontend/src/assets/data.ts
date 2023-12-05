import { Project, IconType, ProjectType } from "../../types/types";

export const works: Project[] = [
  {
    name: "Little Green Sheep",
    stack: [
      IconType.HTML,
      IconType.CSS,
      IconType.JAVASCRIPT,
      IconType.JEST,
      IconType.REDUX,
      IconType.RTL,
      IconType["STYLED-COMPONENTS"],
    ],
    url: "https://google.com/",
    company: "Syrox",
    image: "/images/works/green-sheep-thumbnail.jpg",
    description: "",
  },
  {
    name: "Little Green Sheep",
    stack: [
      IconType.HTML,
      IconType.CSS,
      IconType.JAVASCRIPT,
      IconType.JEST,
      IconType.REDUX,
      IconType.RTL,
      IconType["STYLED-COMPONENTS"],
    ],
    url: "https://google.com/",
    company: "Syrox",
    image: "/images/works/green-sheep-thumbnail.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    name: "Little Green Sheep",
    stack: [
      IconType.HTML,
      IconType.CSS,
      IconType.JAVASCRIPT,
      IconType.JEST,
      IconType.REDUX,
      IconType.RTL,
      IconType["STYLED-COMPONENTS"],
    ],
    type: ProjectType.WEBSITE,
    url: "https://google.com/",
    company: "Syrox",
    image: "/images/works/green-sheep-thumbnail.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];
