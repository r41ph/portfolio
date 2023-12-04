import styled from "styled-components";
import tw, { css } from "twin.macro";
import { BadgeSize } from "../../../types/types";

export const BadgeWrapper = styled.div<{ size?: BadgeSize }>(({ size }) => [
  tw`border
    inline-flex
    mr-1
    mb-0.5
    rounded
    px-1.5
    py-px
    items-center
    [&>svg]:mr-1
    dark:animate-dark-fade-in
  `,
  size === BadgeSize.XS &&
    tw`
      text-xs
      px-1
      [&>svg]:w-4
      [&>svg]:h-4
    `,
  size === BadgeSize.SM &&
    tw`
      text-sm
      [&>svg]:w-5
      [&>svg]:h-5
    `,
  size === BadgeSize.MD &&
    tw`
      text-base
      [&>svg]:w-6
      [&>svg]:h-6
    `,
  size === BadgeSize.LG &&
    tw`
      text-lg
      [&>svg]:w-7
      [&>svg]:h-7
    `,
  css`
    .icon {
      ${tw`mr-1`}
    }
  `,
]);
