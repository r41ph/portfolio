import { useEffect, useState } from "react";
import * as Styled from "./DarkMode.styled";
import { IconType } from "../../../types/types";
import { Icon } from "../Icon/Icon";

export function DarkMode() {
  const preferedColorScheme = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(preferedColorScheme);
  const htmlTag = document.getElementsByTagName("html")[0];

  function toggleDarkMode() {
    setIsDarkTheme((darkTheme) => !darkTheme);
  }

  useEffect(() => {
    if (isDarkTheme) {
      htmlTag.classList.add("dark");
    } else {
      htmlTag.classList.remove("dark");
    }
  }, [htmlTag, isDarkTheme]);

  return (
    <>
      <button
        className="fixed top-4 right-4 z-10 w-8 h-8"
        onClick={toggleDarkMode}
      >
        {isDarkTheme ? (
          <Icon type={IconType.SUN} />
        ) : (
          <Icon type={IconType.MOON} />
        )}
      </button>
      <Styled.DarkMode>
        <Styled.DarkModeBackground
          id="theme-background"
          className={
            isDarkTheme ? "animate-dark-bg-spread" : "animate-dark-bg-shrink"
          }
        ></Styled.DarkModeBackground>
      </Styled.DarkMode>
    </>
  );
}
