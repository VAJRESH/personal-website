import { useCallback, useRef, useState } from "react";

// custom hook which makes the element animate when visible
export default function useIsElementVisible() {
  const [isElementVisible, setIsElementVisible] = useState(false);

  const observer = useRef();
  const slideIn = useCallback((node) => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      setIsElementVisible(entries[0].isIntersecting);
    });

    if (node) observer.current.observe(node);
  }, []);

  return [isElementVisible, slideIn];
};
