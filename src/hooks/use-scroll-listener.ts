import { useState, useCallback, useEffect } from "react";
import throttle from "lodash/throttle";

function getScrollY() {
  if (typeof window === "undefined") {
    return 0;
  }
  return window.scrollY;
}

function useScrollListener() {
  const [scrollY, setScrollY] = useState(getScrollY());

  const throttled = useCallback(
    throttle(() => {
      setScrollY(getScrollY());
    }, 100),
    []
  );

  useEffect(() => {
    if (typeof window === "undefined") {
      return () => {};
    }

    setScrollY(getScrollY());

    window.addEventListener("scroll", throttled);

    return () => {
      window.removeEventListener("scroll", throttled);
    };
  }, [throttled]);

  return scrollY;
}

export default useScrollListener;
