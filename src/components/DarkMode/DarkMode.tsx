import { useEffect, useRef, useState } from "react";
import * as Styled from "./DarkMode.styled";
import { IconType } from "../../../types/types";
import { Icon } from "../Icon/Icon";
import useFirstRender from "../../hooks/useFirstRender";

export function DarkMode() {
  const htmlTag = useRef(document.documentElement);
  const preferedColorScheme = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(preferedColorScheme);
  const isFirstRender = useFirstRender();
  function toggleDarkMode() {
    setIsDarkTheme((darkTheme) => !darkTheme);
  }

  useEffect(() => {
    if (isDarkTheme) {
      htmlTag.current.classList.add("dark");
    } else {
      htmlTag.current.classList.remove("dark");
    }
  }, [htmlTag, isDarkTheme]);

  return (
    <>
      <button
        className="fixed top-4 right-4 z-10 w-8 h-8"
        onClick={toggleDarkMode}
        aria-label="Toggle dark mode"
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
            isDarkTheme
              ? "animate-dark-bg-spread"
              : isFirstRender
              ? ""
              : "animate-dark-bg-shrink"
          }
        ></Styled.DarkModeBackground>
      </Styled.DarkMode>
    </>
  );
}
