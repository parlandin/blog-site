import React, { useEffect } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import lightTheme from "@styles/themes/light";
import darkTheme from "@styles/themes/dark";
import useToggleTheme from "@hooks/useToggleTheme";
import halloweenTheme from "@styles/themes/halloween";
import useEventTheme from "@src/hooks/useEventTheme";

const themes: Record<string, DefaultTheme> = {
  light: lightTheme,
  dark: darkTheme,
  halloween: halloweenTheme,
};

interface ThemeWrapperProps {
  children: React.ReactNode;
}

const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ children }) => {
  const { theme } = useToggleTheme();

  const { isEventActive, eventThemeName } = useEventTheme();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  if (isEventActive) {
    return (
      <ThemeProvider theme={themes[eventThemeName]}>{children}</ThemeProvider>
    );
  }

  return <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>;
};

export default ThemeWrapper;
