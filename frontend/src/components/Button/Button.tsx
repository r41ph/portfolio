import { AriaButtonProps, useButton } from "@react-aria/button";
import { useFocusRing } from "@react-aria/focus";
import { useHover } from "@react-aria/interactions";
import { mergeProps } from "@react-aria/utils";
import { HTMLAttributes, useRef } from "react";
import { ButtonStyled } from "./Button.styled";
import { ButtonSize } from "../../../types/types";

type ButtonProps = AriaButtonProps &
  HTMLAttributes<HTMLButtonElement> & {
    tabIndex?: number;
    size?: ButtonSize;
    noBorder?: boolean;
    withIcon?: boolean;
  };

export function Button(props: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const {
    children,
    className,
    tabIndex,
    size = ButtonSize.SM,
    noBorder = false,
    withIcon = false,
  } = props;
  const { buttonProps } = useButton(props, ref);
  const { isFocusVisible, focusProps } = useFocusRing();
  const { hoverProps, isHovered } = useHover(props);
  const mergedAriaProps = mergeProps(buttonProps, focusProps, hoverProps);
  return (
    <ButtonStyled
      {...mergedAriaProps}
      className={`${className ?? ""} ${isFocusVisible ? "focus-ring" : ""}`}
      ref={ref}
      tabIndex={tabIndex ?? 0}
      style={{ opacity: isHovered ? 0.6 : 1 }}
      size={size}
      $noBorder={noBorder}
      $withIcon={withIcon}
    >
      {children}
    </ButtonStyled>
  );
}
