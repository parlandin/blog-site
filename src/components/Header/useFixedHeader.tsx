import { useState, useRef, useEffect } from "react";

interface UseFixedHeaderOutput {
  isFixed: boolean;
  headerRef: React.MutableRefObject<null>;
}

export const useFixedHeader = (): UseFixedHeaderOutput => {
  const [isFixed, setIsFixed] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const headerPosition = (headerRef.current as HTMLElement).offsetTop;
        const currentPosition = window.scrollY;

        if (currentPosition >= headerPosition) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { isFixed, headerRef };
};
