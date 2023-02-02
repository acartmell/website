import { useEffect } from "react";

function useViewportHeight() {
  useEffect(() => {
    if (typeof window === "undefined") {
      return () => {};
    }

    const setVhVar = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setVhVar();

    window.addEventListener("resize", setVhVar);

    return () => {
      window.removeEventListener("resize", setVhVar);
    };
  }, []);
}

export default useViewportHeight;
