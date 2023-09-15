import { ReactComponent as HTMLLogo } from "../../assets/svg/html-5-logo.svg";
import { ReactComponent as CSSLogo } from "../../assets/svg/css-3-logo.svg";
import { ReactComponent as GraphqlLogo } from "../../assets/svg/graphql-logo.svg";
import { ReactComponent as JSLogo } from "../../assets/svg/javascript-logo.svg";
import { ReactComponent as LESSLogo } from "../../assets/svg/less-logo.svg";
import { ReactComponent as ReactLogo } from "../../assets/svg/react-logo.svg";
import { ReactComponent as ReduxLogo } from "../../assets/svg/redux-logo.svg";
import { ReactComponent as SCSSLogo } from "../../assets/svg/scss-logo.svg";
import { ReactComponent as StyledComponentsLogo } from "../../assets/svg/styled-components-logo.svg";
import { ReactComponent as WordpressLogo } from "../../assets/svg/wordpress-logo.svg";
import { ReactComponent as JestLogo } from "../../assets/svg/jest-logo.svg";
import { ReactComponent as RTLLogo } from "../../assets/svg/rtl-logo.svg";

import { ReactComponent as GithubLogo } from "../../assets/svg/github.svg";
import { ReactComponent as CodePenLogo } from "../../assets/svg/codepen.svg";
import { ReactComponent as Envelope } from "../../assets/svg/envelope.svg";
import { ReactComponent as Sun } from "../../assets/svg/sun.svg";
import { ReactComponent as Moon } from "../../assets/svg/moon.svg";

import { IIconSize, IconType } from "../../../types/types";
import { IconWrapper } from "./Icon.styles";

/**
 * Renders an icon based on the type passed in.
 * @param type - The type of icon to render.
 * @param className - Optional class name to add to the icon.
 * @param size - Optional size of the icon. Defaults to small. See IIconSize for options.
 */

export const Icon = ({
  type: iconType,
  className = "",
  size = IIconSize.SM,
}: {
  type: IconType;
  className?: string;
  size?: IIconSize;
}) => {
  return (
    <IconWrapper
      size={size}
      data-testid={`${iconType.toLowerCase()}`}
      className={className}
    >
      {iconType === IconType.CSS && <CSSLogo />}
      {iconType === IconType.HTML && <HTMLLogo />}
      {iconType === IconType.GRAPHQL && <GraphqlLogo />}
      {iconType === IconType.JAVASCRIPT && <JSLogo />}
      {iconType === IconType.LESS && <LESSLogo />}
      {iconType === IconType.REACT && <ReactLogo />}
      {iconType === IconType.REDUX && <ReduxLogo />}
      {iconType === IconType.SCSS && <SCSSLogo />}
      {iconType === IconType["STYLED-COMPONENTS"] && <StyledComponentsLogo />}
      {iconType === IconType.WORDPRESS && <WordpressLogo />}
      {iconType === IconType.JEST && <JestLogo />}
      {iconType === IconType.RTL && <RTLLogo />}
      {iconType === IconType.GITHUBLOGO && <GithubLogo />}
      {iconType === IconType.CODEPENLOGO && <CodePenLogo />}
      {iconType === IconType.ENVELOPE && <Envelope />}
      {iconType === IconType.SUN && <Sun />}
      {iconType === IconType.MOON && <Moon />}
    </IconWrapper>
  );
};
