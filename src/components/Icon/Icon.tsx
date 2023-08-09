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

import { IconType } from "../../../types/types";

export const Icon = ({ type: iconType }: { type: IconType }) => {
  return (
    <>
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
    </>
  );
};
