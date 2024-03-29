import { Project, IconType, ProjectType } from "../../types/types";

export const works: Project[] = [
  {
    _id: "IHU92483",
    name: "Little Green Sheep",
    projectType: "work",
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
    _id: "LKNk876JBK",
    name: "Little Green Sheep",
    projectType: "work",
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
    _id: "JKHKJHKHK646",
    name: "Little Green Sheep",
    projectType: "work",
    stack: [
      IconType.HTML,
      IconType.CSS,
      IconType.JAVASCRIPT,
      IconType.JEST,
      IconType.REDUX,
      IconType.RTL,
      IconType["STYLED-COMPONENTS"],
    ],
    siteType: ProjectType.WEBSITE,
    url: "https://google.com/",
    company: "Syrox",
    image: "/images/works/green-sheep-thumbnail.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];
