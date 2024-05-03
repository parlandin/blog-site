import { ThemeContext } from "@contexts/ThemeContext";
import { useContext } from "react";

const useToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return { theme, toggleTheme };
};

export default useToggleTheme;
