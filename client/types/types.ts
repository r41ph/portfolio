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
  description: string;
}

export interface Lab {
  name: string;
  source: string;
}

export interface AppState {
  projects: Project[];
  labs: Lab[];
}

export enum ActionType {
  SET_PROJECT = "SET_PROJECT",
  SET_LAB = "SET_LAB",
}

export interface Action {
  type: ActionType;
}

export interface ProjectAction extends Action {
  payload: Project[];
}

export interface LabAction extends Action {
  payload: Lab[];
}

export type AppAction = ProjectAction | LabAction;

// Actions type Guards
export function isProjectAction(action: Action): action is ProjectAction {
  return action.type === ActionType.SET_PROJECT;
}
export function isLabAction(action: Action): action is LabAction {
  return action.type === ActionType.SET_LAB;
}

export interface AppContextType {
  state: AppState;
  setState: React.Dispatch<AppAction>;
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
