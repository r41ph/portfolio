// import { useRef } from "react";
import { AriaLinkOptions /* , useLink */ } from "@react-aria/link";
// import { mergeProps } from "@react-aria/utils";
import { AriaFocusRingProps, useFocusRing } from "@react-aria/focus";

type LinkProps = {
  children: React.ReactNode;
} & AriaLinkOptions &
  AriaFocusRingProps;

export function Link(props: LinkProps) {
  const { children, href } = props;
  // const ref = useRef(null);
  const { isFocusVisible, focusProps } = useFocusRing(props);
  // TODO: find out why useLink is returning "Invalid hook call." error
  // const { linkProps } = useLink(props, ref);
  // const mergedAriaProps = mergeProps(linkProps, focusProps);
  return (
    <a
      {...focusProps}
      href={href}
      // ref={ref}
      target="_blank"
      className={`${isFocusVisible ? "focus-ring" : ""}`}
    >
      {children}
    </a>
  );
}
