import { useEffect, useState } from "react";

export const useScreenDetector = () => {
  const [width, setWidth] = useState(
    typeof window !== "undefined" && window.innerWidth ? window.innerWidth : 0
  );

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 650;
  const isTablet = width <= 1024;
  const isDesktop = width > 1024;

  return { isMobile, isTablet, isDesktop };
};
