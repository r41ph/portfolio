// Description: this file contains the styled components for the TopBar component

import styled from "styled-components";
import tw from "twin.macro";

// The topbar wrapper that contains the a list with the items
// It is fixed and responsive
export const TopBarWrapper = styled.div(() => [
  tw`
    w-full
    h-14
    flex
    items-center
    justify-between
    z-50
    dark:animate-dark-fade-in
    xs:h-16
    items-end
  `,
]);

// The list of items
export const TopBarList = styled.ul(() => [
  tw`
    flex
    items-center
    justify-end
    w-full
    h-full
  `,
]);

// The items
export const TopBarItem = styled.li(() => [
  tw`
    flex
    items-center
    justify-center
    h-full
    pr-4
    cursor-pointer
    xs:px-2
    hover:opacity-70

  `,
]);
