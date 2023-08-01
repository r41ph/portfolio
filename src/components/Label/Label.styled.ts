import styled from "styled-components";
import tw from "twin.macro";
import { ILabelSize } from "../../../types/types";

export const LabelWrapper = styled.div<{ size?: ILabelSize }>(({ size }) => [
  size === ILabelSize.XS &&
    tw`
      text-xs
      [&>svg]:w-4
      [&>svg]:h-4
    `,
  size === ILabelSize.SM &&
    tw`
      text-sm
      [&>svg]:w-5
      [&>svg]:h-5
    `,
  size === ILabelSize.MD &&
    tw`
      text-base
      [&>svg]:w-6
      [&>svg]:h-6
    `,
  size === ILabelSize.LG &&
    tw`
      text-lg
      [&>svg]:w-7
      [&>svg]:h-7
    `,
  tw`border
    inline-flex
    mr-1
    mb-0.5
    rounded
    px-1.5
    py-px
    items-center
    [&>svg]:mr-1
    dark:bg-grey-dark
    dark:text-grey-light
  `,
]);
