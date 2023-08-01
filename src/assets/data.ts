import { IProject, IStack } from "../../types/types";

export const projects: IProject[] = [
  {
    name: "Little Green Sheep",
    stack: [
      IStack.HTML,
      IStack.CSS,
      IStack.JAVASCRIPT,
      IStack.JEST,
      IStack.REDUX,
      IStack.RTL,
      IStack["STYLED-COMPONENTS"],
    ],
    company: "Syrox",
    image: "/src/assets/images/projects/green-sheep-thumbnail.jpg",
  },
  {
    name: "Snüz",
    stack: [IStack.REACT, IStack.HTML, IStack.CSS, IStack.JAVASCRIPT],
    company: "Syrox",
    image: "/src/assets/images/projects/snuz-thumbnail.jpg",
  },
  {
    name: "WCOO",
    stack: [IStack.HTML, IStack.CSS, IStack.JAVASCRIPT],
    company: "Syrox",
    image: "/src/assets/images/projects/wcoo-thumbnail.jpg",
  },
  {
    name: "Car Data",
    stack: [IStack.HTML, IStack.CSS, IStack.JAVASCRIPT],
    company: "Syrox",
    image: "/src/assets/images/projects/cardata-thumbnail.jpg",
  },
  {
    name: "Aruna Seth",
    stack: [IStack.HTML, IStack.CSS, IStack.JAVASCRIPT],
    company: "Syrox",
    image: "/src/assets/images/projects/aruna-thumbnail.jpg",
  },
  {
    name: "Feather",
    stack: [IStack.HTML, IStack.CSS, IStack.JAVASCRIPT],
    company: "Syrox",
    image: "/src/assets/images/projects/feather-thumbnail.jpg",
  },
  {
    name: "Car Data 2",
    stack: [IStack.HTML, IStack.CSS, IStack.JAVASCRIPT],
    company: "Syrox",
    image: "/src/assets/images/projects/ruth-thumbnail.jpg",
  },
  {
    name: "Aruna Seth 2",
    stack: [IStack.HTML, IStack.CSS, IStack.JAVASCRIPT],
    company: "Syrox",
    image: "/src/assets/images/projects/kjlaundry-thumbnail.jpg",
  },
  {
    name: "Feather 2",
    stack: [IStack.HTML, IStack.CSS, IStack.JAVASCRIPT],
    company: "Syrox",
    image: "/src/assets/images/projects/trilogy-thumbnail.jpg",
  },
];
