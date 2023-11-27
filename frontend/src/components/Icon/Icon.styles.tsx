import styled, { css } from "styled-components";
import tw from "twin.macro";
import { IconSize } from "../../../types/types";

export const IconWrapper = styled.div<{ size: IconSize }>(({ size }) => [
  tw`relative`,
  size === IconSize.XS && tw`w-5 h-5`,
  size === IconSize.SM && tw`w-7 h-7`,
  size === IconSize.MD && tw`w-12 h-12`,
  size === IconSize.LG && tw`w-24 h-24`,
  css`
    svg,
    path {
      display: block;
      max-width: 100%;
      max-height: 100%;
      width: 100%;
      height: 100%;
    }
  `,
]);
