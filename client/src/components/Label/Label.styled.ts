import styled from "styled-components";
import tw from "twin.macro";
import { LabelSize } from "../../../types/types";

export const LabelWrapper = styled.div<{ size?: LabelSize }>(({ size }) => [
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
  size === LabelSize.XS &&
    tw`
      text-xs
      px-1
      [&>svg]:w-4
      [&>svg]:h-4
    `,
  size === LabelSize.SM &&
    tw`
      text-sm
      [&>svg]:w-5
      [&>svg]:h-5
    `,
  size === LabelSize.MD &&
    tw`
      text-base
      [&>svg]:w-6
      [&>svg]:h-6
    `,
  size === LabelSize.LG &&
    tw`
      text-lg
      [&>svg]:w-7
      [&>svg]:h-7
    `,
]);
