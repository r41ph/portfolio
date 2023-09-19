export interface IProject {
  name: string;
  stack: Icons[];
  company: string;
  image: string;
  description?: string;
}

export enum Icons {
  GITHUB = "Github",
  CODEPEN = "Codepen",
  ENVELOPE = "Envelope",
  HTML = "HTML",
  CSS = "CSS",
  GRAPHQL = "GraphQL",
  JAVASCRIPT = "JavaScript",
  LESS = "LESS",
  REACT = "React",
  REDUX = "Redux",
  SCSS = "SCSS",
  "STYLED-COMPONENTS" = "Styled-Components",
  WORDPRESS = "Wordpress",
  JEST = "Jest",
  RTL = "RTL",
  SUN = "Sun",
  MOON = "Moon",
}

// IStack and IconType are equal enums
// See https://devimalplanet.com/typescript-how-to-extend-one-enum-from-another
export type IconType = Icons;
// eslint-disable-next-line @typescript-eslint/no-redeclare
export const IconType = { ...Icons };

export enum IconSize {
  XS = "xs",
  SM = "sm",
  MD = "md",
  LG = "lg",
}

export interface Label {
  text: string;
  icon?: IconType;
  callback?: () => void;
  size?: LabelSize;
}

export enum LabelSize {
  XS = "xs",
  SM = "sm",
  MD = "md",
  LG = "lg",
}

export enum CardLinkType {
  "CENTER" = "center",
  "BOTTOM" = "bottom",
}
