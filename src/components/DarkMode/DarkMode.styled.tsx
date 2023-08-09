import { styled } from "twin.macro";

export const DarkMode = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  min-height: 400px;
  overflow: hidden;
  /* background-color: var(--light-theme); */
  z-index: -1;
`;

export const DarkModeBackground = styled.div`
  position: fixed;
  border-radius: 50%;
  transform-origin: center;
  z-index: -1;
  width: 0;
  height: 0;
`;
