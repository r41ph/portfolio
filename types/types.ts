export interface IProject {
  name: string;
  stack: Icons[];
  company: string;
  image: string;
  description?: string;
}

export enum Icons {
  GITHUBLOGO = "GITHUBLOGO",
  CODEPENLOGO = "CODEPENLOGO",
  ENVELOPE = "ENVELOPE",
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
  SUN = "SUN",
  MOON = "MOON",
}

// IStack and IconType are equal enums
// See https://devimalplanet.com/typescript-how-to-extend-one-enum-from-another
export type IconType = Icons;
// eslint-disable-next-line @typescript-eslint/no-redeclare
export const IconType = { ...Icons };

export interface ILabel {
  text: string;
  icon?: IconType;
  callback?: () => void;
  size?: ILabelSize;
}

export enum ILabelSize {
  XS = "xs",
  SM = "sm",
  MD = "md",
  LG = "lg",
}

export enum ICardLinkType {
  "CENTER" = "center",
  "BOTTOM" = "bottom",
}
