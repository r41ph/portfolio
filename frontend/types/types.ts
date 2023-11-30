export enum Icons {
  GITHUB = "Github",
  CODEPEN = "Codepen",
  CONTACT = "Contact",
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
  STORYBOOK = "Storybook",
  LOGIN = "Log-in",
  LOGOUT = "Log-out",
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
  key?: string;
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

export interface Project {
  name: string;
  stack: Icons[];
  company: string;
  image: string;
  url?: string;
  description: string;
  type?: ProjectType;
}

export enum ProjectType {
  APPLICATION = "application",
  WEBSITE = "website",
  ECOMMERCE = "ecommerce",
}

export interface UnsplashImage {
  src: string;
  author: {
    name: string;
    url: string;
  };
}

export enum ButtonSize {
  XS = "xs",
  SM = "sm",
  MD = "md",
  LG = "lg",
  AUTO = "auto",
}

export type LoginData = {
  username: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
};

export type Headers = {
  // "Content-Type": string;
  Authorization?: string;
};

export interface LoginResponse extends LoginData {
  token: string;
  _id: string;
}
