import styled, { css } from "styled-components";
import tw from "twin.macro";
import { IIconSize } from "../../../types/types";

export const IconWrapper = styled.div<{ size: IIconSize }>(({ size }) => [
  tw`relative`,
  size === IIconSize.XS && tw`w-3 h-3`,
  size === IIconSize.SM && tw`w-6 h-6`,
  size === IIconSize.MD && tw`w-12 h-12`,
  size === IIconSize.LG && tw`w-24 h-24`,
  css`
    svg {
      max-width: 100%;
      max-height: 100%;
      width: 100%;
      height: 100%;
    }
  `,
]);
