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
import { IconType } from "../../../types/types";

export const Icon = ({ type }: { type: IconType }) => {
  const icon = type.toUpperCase();
  return (
    <>
      {icon === IconType.CSS.toUpperCase() && <CSSLogo />}
      {icon === IconType.HTML.toUpperCase() && <HTMLLogo />}
      {icon === IconType.GRAPHQL.toUpperCase() && <GraphqlLogo />}
      {icon === IconType.JAVASCRIPT.toUpperCase() && <JSLogo />}
      {icon === IconType.LESS.toUpperCase() && <LESSLogo />}
      {icon === IconType.REACT.toUpperCase() && <ReactLogo />}
      {icon === IconType.REDUX.toUpperCase() && <ReduxLogo />}
      {icon === IconType.SCSS.toUpperCase() && <SCSSLogo />}
      {icon === IconType["STYLED-COMPONENTS"].toUpperCase() && (
        <StyledComponentsLogo />
      )}
      {icon === IconType.WORDPRESS.toUpperCase() && <WordpressLogo />}
      {icon === IconType.JEST.toUpperCase() && <JestLogo />}
      {icon === IconType.RTL.toUpperCase() && <RTLLogo />}
    </>
  );
};
