import { useCallback, useEffect, useRef, useState } from "react";

export function useElementInView(callback) {
  const elementReference = useRef(null);
  const optionalElementReference = useRef(null);

  const callbackElementInSight = useCallback((node) => {
    if (elementReference.current) elementReference.current.disconnect();

    elementReference.current = new IntersectionObserver(callback);

    if (node) elementReference.current.observe(node);
  }, []);

  return [callbackElementInSight, elementReference, optionalElementReference];
}

export function useGetWindowDimensions() {
  const [dimensions, setDimensions] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    function updateDimensions() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // to set initial state
    updateDimensions();

    window.addEventListener("resize", updateDimensions);
  }, []);

  return dimensions;
}
