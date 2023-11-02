import styled from "styled-components";
import tw from "twin.macro";
import { ButtonSize } from "../../../types/types";

export const ButtonStyled = styled.button<{
  size?: ButtonSize;
  noBorder?: boolean;
  withIcon?: boolean;
}>(({ size, noBorder, withIcon }) => [
  tw`relative p-1`,
  size === ButtonSize.XS && tw`w-20 text-xs`,
  size === ButtonSize.SM && tw`w-24 text-sm`,
  size === ButtonSize.MD && tw`w-32 text-base`,
  size === ButtonSize.LG && tw`w-40 text-xl`,
  size === ButtonSize.AUTO && tw`w-auto text-base`,
  noBorder ? tw`border-none` : tw`border-2`,
  withIcon && tw`flex items-center justify-center`,
]);
