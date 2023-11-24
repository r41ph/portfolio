import { useEffect, useRef, useState } from "react";
import * as Styled from "./DarkMode.styled";
import { ButtonSize, IconSize, IconType } from "../../../types/types";
import { Icon } from "../Icon/Icon";
import useFirstRender from "../../hooks/use-first-render";
import { Button } from "../Button/Button";
import { createPortal } from "react-dom";

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
      className="z-50 !p-0"
      // onPress => https://react-spectrum.adobe.com/blog/building-a-button-part-1.html
      onPress={toggleDarkMode}
      aria-label="Toggle dark mode"
      noBorder
      withIcon
    >
      {isDarkTheme ? (
        <Icon type={IconType.SUN} size={IconSize.SM} />
      ) : (
        <Icon type={IconType.MOON} size={IconSize.SM} />
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
      {createPortal(
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
        </Styled.DarkMode>,
        document.body,
      )}
    </>
  );
}
