import { navigate } from "gatsby";
import React, { useEffect, useState } from "react";

//TODO temporary solution to back navigation
interface NavigateBackProps {
  fallBack?: string;
  fullPath?: string;
}

const ACCEPTED_PATHS = ["blog", "portfolio", "/"];

const useNavigateBack = ({ fallBack, fullPath }: NavigateBackProps) => {
  const [currentPath, setCurrentPath] = useState<string | null | number>(null);

  const selectCorrectPath = () => {
    if (!fullPath || fullPath.length === 0) {
      return;
    }

    const arrayOfPath = fullPath.split("/");

    for (let i = arrayOfPath.length - 1; i >= 0; i--) {
      const pathPart = arrayOfPath[i];

      if (ACCEPTED_PATHS.includes(pathPart)) {
        return pathPart;
      }
    }

    return null;
  };

  const defineBackPath = () => {
    const hasHistory =
      typeof window !== "undefined" && window.history.length > 1;

    if (hasHistory) {
      setCurrentPath(-1);
      return -1;
    }

    if (fallBack) {
      setCurrentPath(fallBack);
      return fallBack;
    }

    const correctPath = selectCorrectPath();

    setCurrentPath(correctPath || "/");

    return correctPath || "/";
  };

  const navigateToBack = () => {
    navigate((currentPath as string) || "/");
  };

  useEffect(() => {
    defineBackPath();
  }, []);

  return { navigateToBack, currentPath };
};

export default useNavigateBack;
