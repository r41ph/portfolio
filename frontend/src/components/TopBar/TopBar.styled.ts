import styled from "styled-components";
import tw from "twin.macro";

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

export const TopBarList = styled.ul(() => [
  tw`
    flex
    items-center
    justify-end
    w-full
    h-full
  `,
]);

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
