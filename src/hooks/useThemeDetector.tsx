import React, { useState, useEffect } from "react";

const useThemeDetector = () => {
  const getCurrentTheme = () => {
    if (typeof window === "undefined") return;

    const salvedTheme = localStorage.getItem("theme");

    if (salvedTheme) {
      return salvedTheme === "dark" ? true : false;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());

  const mqListener = (e: {
    matches:
      | boolean
      | ((prevState: boolean | undefined) => boolean | undefined)
      | undefined;
  }) => {
    setIsDarkTheme(e.matches);
  };

  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

    darkThemeMq.addEventListener("change", mqListener);
    return () => darkThemeMq.removeEventListener("change", mqListener);
  }, []);

  return isDarkTheme ? "dark" : "light";
};

export default useThemeDetector;
