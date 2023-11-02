import { useEffect, useRef, useState } from "react";
import * as Styled from "./DarkMode.styled";
import { ButtonSize, IconType } from "../../../types/types";
import { Icon } from "../Icon/Icon";
import useFirstRender from "../../hooks/use-first-render";
import { Button } from "../Button/Button";

function DarkModeToggle({
  toggleDarkMode,
  isDarkTheme,
}: {
  toggleDarkMode: () => void;
  isDarkTheme: boolean;
}) {
  return (
    <Button
      size={ButtonSize.AUTO}
      tabIndex={1}
      className="absolute top-1 right-4 z-50"
      // onPress => https://react-spectrum.adobe.com/blog/building-a-button-part-1.html
      onPress={toggleDarkMode}
      aria-label="Toggle dark mode"
      noBorder
    >
      {isDarkTheme ? (
        <Icon type={IconType.SUN} />
      ) : (
        <Icon type={IconType.MOON} />
      )}
    </Button>
  );
}

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
      <DarkModeToggle
        toggleDarkMode={toggleDarkMode}
        isDarkTheme={isDarkTheme}
      />
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
