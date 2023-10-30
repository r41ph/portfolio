import styled, { css } from "styled-components";
import tw from "twin.macro";

export const CardWrapper = styled.article<{ $shadow?: boolean }>(
  ({ $shadow }) => [
    tw`h-full relative max-w-xs`,
    $shadow && tw`shadow-lg bg-white m-0 p-1`,
  ],
);

export const CardContent = styled.div<{ image: string }>(({ image }) => [
  tw`bg-no-repeat object-cover bg-cover relative bg-center flex flex-col max-w-[100%] justify-end aspect-square`,
  css`
    background-image: url(${image});
  `,
]);

export const CardCaption = tw.footer`
  pt-1
`;

/*

import styled, { css } from "styled-components/macro";
import tw, { theme } from "twin.macro";
const XXX = styled.button<{ isGrey: boolean }>(({ isGrey }) => [
  tw`bg-blue`, // tailwind
  isGrey && tw`[color: grey]`, // conditional + custom css
  css`
    text-decoration: underline; // custom css
  `,
]);

*/
