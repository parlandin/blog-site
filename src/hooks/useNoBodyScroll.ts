import React from "react";

const useNoBodyScroll = (show: boolean) => {
  React.useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [show]);
};

export default useNoBodyScroll;
