import { AriaButtonProps, useButton } from "@react-aria/button";
import { useFocusRing } from "@react-aria/focus";
import { useHover } from "@react-aria/interactions";
import { mergeProps } from "@react-aria/utils";
import { HTMLAttributes, useRef } from "react";

type ButtonProps = AriaButtonProps &
  HTMLAttributes<HTMLButtonElement> & {
    tabIndex?: number;
  };

export function Button(props: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const { children, className, tabIndex } = props;
  const { buttonProps } = useButton(props, ref);
  const { isFocusVisible, focusProps } = useFocusRing();
  const { hoverProps, isHovered } = useHover(props);
  const mergedAriaProps = mergeProps(buttonProps, focusProps, hoverProps);
  return (
    <button
      {...mergedAriaProps}
      className={`${className ?? ""} ${isFocusVisible ? "focus-ring" : ""}`}
      ref={ref}
      tabIndex={tabIndex ?? 0}
      style={{ opacity: isHovered ? 0.6 : 1 }}
    >
      {children}
    </button>
  );
}
