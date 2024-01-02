import Select from "react-select";
export enum IconType {
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
  DASHBOARD = "Dashboard",
}

export enum IconSize {
  XS = "xs",
  SM = "sm",
  MD = "md",
  LG = "lg",
}

export interface Badge {
  text: string;
  icon?: IconType;
  key?: string;
  callback?: () => void;
  size?: BadgeSize;
}

export enum BadgeSize {
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
  stack: string[];
  company: string;
  image: string;
  url?: string;
  description: string;
  type?: ProjectType;
  position?: number;
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

export interface LoginResponse extends LoginData {
  token: string;
  _id: string;
}

export interface SelectOption {
  value: string;
  label: string;
}

export type OptionMutation = (
  option: string,
) => Promise<void | FormOptions | SelectOption[]>;

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  noBorder?: boolean;
}

export type LabData = {
  labs: Project[];
};

export type WorkData = {
  works: Project[];
};

export interface AddProjectFormErrors {
  projectType?: string;
  name?: string;
  stack?: string;
  siteType?: string;
  url?: string;
  company?: string;
  image?: string;
  description?: string;
  position: number;
}

export interface FormOptions {
  _id: string;
  stack: string[];
  projectType: string[];
  siteType: string[];
}

export interface FormDataType {
  projectType: { value: string; error: string };
  name: { value: string; error: string };
  stack: { value: string; error: string };
  siteType: { value: string; error: string };
  url: { value: string; error: string };
  company: { value: string; error: string };
  image: { value: string; error: string };
  description: { value: string; error: string };
  position: { value: number; error: string };
  source: string;
}

export interface FormDataErrors {
  PROJECTTYPE: string;
  NAME: string;
  STACK: string;
  // siteType: string;
  URL: string;
  // company: string;
  IMAGE: string;
  DESCRIPTION: string;
  POSITION: string;
  [key: string]: string;
}
export interface ServerValidationErrors {
  field: string;
  error: string;
}

export interface DashboardActionResponse {
  valid: boolean;
  errors: ServerValidationErrors | [];
}
