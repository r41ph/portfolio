import styled from "styled-components";
import tw, { css } from "twin.macro";

export const SuccessMessage = styled.p(() => [
  tw`
    flex 
    flex-col 
    items-center
    text-lg
  `,
  css`
    .icon {
      margin-top: 20px;
      path {
        stroke: green;
      }
    }
  `,
]);
