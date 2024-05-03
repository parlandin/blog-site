import React from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import lightTheme from "@src/styles/themes/light";
import darkTheme from "@src/styles/themes/dark";
import useToggleTheme from "@hooks/useToggleTheme";

const themes: Record<string, DefaultTheme> = {
  light: lightTheme,
  dark: darkTheme,
};

interface ThemeWrapperProps {
  children: React.ReactNode;
}

const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ children }) => {
  const { theme } = useToggleTheme();

  return <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>;
};

export default ThemeWrapper;
