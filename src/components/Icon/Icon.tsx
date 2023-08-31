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

export const Icon = ({
  type: iconType,
  className = "",
}: {
  type: IconType;
  className?: string;
}) => {
  return (
    <>
      {iconType === IconType.CSS && (
        <CSSLogo
          className={className}
          data-testid={`${iconType.toLowerCase()}`}
        />
      )}
      {iconType === IconType.HTML && (
        <HTMLLogo
          className={className}
          data-testid={`${iconType.toLowerCase()}`}
        />
      )}
      {iconType === IconType.GRAPHQL && (
        <GraphqlLogo
          className={className}
          data-testid={`${iconType.toLowerCase()}`}
        />
      )}
      {iconType === IconType.JAVASCRIPT && (
        <JSLogo
          className={className}
          data-testid={`${iconType.toLowerCase()}`}
        />
      )}
      {iconType === IconType.LESS && (
        <LESSLogo
          className={className}
          data-testid={`${iconType.toLowerCase()}`}
        />
      )}
      {iconType === IconType.REACT && (
        <ReactLogo
          className={className}
          data-testid={`${iconType.toLowerCase()}`}
        />
      )}
      {iconType === IconType.REDUX && (
        <ReduxLogo
          className={className}
          data-testid={`${iconType.toLowerCase()}`}
        />
      )}
      {iconType === IconType.SCSS && (
        <SCSSLogo
          className={className}
          data-testid={`${iconType.toLowerCase()}`}
        />
      )}
      {iconType === IconType["STYLED-COMPONENTS"] && (
        <StyledComponentsLogo
          className={className}
          data-testid={`${iconType.toLowerCase()}`}
        />
      )}
      {iconType === IconType.WORDPRESS && (
        <WordpressLogo
          className={className}
          data-testid={`${iconType.toLowerCase()}`}
        />
      )}
      {iconType === IconType.JEST && (
        <JestLogo
          className={className}
          data-testid={`${iconType.toLowerCase()}`}
        />
      )}
      {iconType === IconType.RTL && (
        <RTLLogo
          className={className}
          data-testid={`${iconType.toLowerCase()}`}
        />
      )}
      {iconType === IconType.GITHUBLOGO && (
        <GithubLogo
          className={className}
          data-testid={`${iconType.toLowerCase()}`}
        />
      )}
      {iconType === IconType.CODEPENLOGO && (
        <CodePenLogo
          className={className}
          data-testid={`${iconType.toLowerCase()}`}
        />
      )}
      {iconType === IconType.ENVELOPE && (
        <Envelope
          className={className}
          data-testid={`${iconType.toLowerCase()}`}
        />
      )}
      {iconType === IconType.SUN && (
        <Sun className={className} data-testid={`${iconType.toLowerCase()}`} />
      )}
      {iconType === IconType.MOON && (
        <Moon className={className} data-testid={`${iconType.toLowerCase()}`} />
      )}
    </>
  );
};
