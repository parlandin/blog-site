import React from "react";
import useToggleTheme from "@src/hooks/useToggleTheme";
import "./toggle.css";

const ToggleButton = () => {
  //temp
  const { theme, toggleTheme } = useToggleTheme();

  const handleThemeToggle = () => {
    toggleTheme();
  };

  return (
    <label className="theme-toggle" title="Toggle theme" tabIndex={0}>
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={handleThemeToggle}
      />
      <span className="theme-toggle-sr">Toggle theme</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        width="23px"
        height="23px"
        fill="currentColor"
        className="theme-toggle__around"
        viewBox="0 0 32 32"
      >
        <clipPath id="theme-toggle__around__cutout">
          <path d="M0 0h42v30a1 1 0 00-16 13H0Z" />
        </clipPath>
        <g clip-path="url(#theme-toggle__around__cutout)">
          <circle cx="16" cy="16" r="8.4" />
          <g>
            <circle cx="16" cy="3.3" r="2.3" />
            <circle cx="27" cy="9.7" r="2.3" />
            <circle cx="27" cy="22.3" r="2.3" />
            <circle cx="16" cy="28.7" r="2.3" />
            <circle cx="5" cy="22.3" r="2.3" />
            <circle cx="5" cy="9.7" r="2.3" />
          </g>
        </g>
      </svg>
    </label>
  );
};

export default ToggleButton;
