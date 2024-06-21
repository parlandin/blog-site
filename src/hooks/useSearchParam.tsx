import { useEffect, useState, useCallback } from "react";

const useSearchParam = (params: string, queryName: string) => {
  const extractParamValue = useCallback(
    (paramString: string, paramName: string): string | null => {
      const match = paramString.match(new RegExp(`[?&]${paramName}=([^&]*)`));

      const decodeMatchURI = match ? decodeURIComponent(match[1]) : null;

      return decodeURIComponent(decodeMatchURI || "");
    },
    []
  );

  const updateSearchParam = useCallback(
    (paramName: string, paramValue: string) => {
      const params = new URLSearchParams(window.location.search);

      const encodedValue = encodeURIComponent(paramValue);

      params.set(paramName, encodedValue);
      window.history.replaceState(
        {},
        "",
        `${window.location.pathname}?${params.toString()}`
      );
    },
    []
  );

  return {
    query: extractParamValue(params, queryName) || "",
    updateSearchParam,
  };
};

export default useSearchParam;
