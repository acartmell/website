import { useState, useEffect } from "react";

function isSupported() {
  return (
    typeof window !== "undefined" && typeof window.matchMedia === "function"
  );
}

function useSystemTheme() {
  const systemThemeMatch = isSupported()
    ? window.matchMedia("(prefers-color-scheme: dark)")
    : null;

  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (systemThemeMatch) {
      return systemThemeMatch.matches ? "dark" : "light";
    }
    return "light";
  });

  useEffect(() => {
    if (systemThemeMatch) {
      setTheme(systemThemeMatch.matches ? "dark" : "light");

      if (typeof systemThemeMatch.addEventListener === "function") {
        const handleChange = (event: MediaQueryListEvent) => {
          setTheme(event.matches ? "dark" : "light");
        };
        systemThemeMatch.addEventListener("change", handleChange);

        return () => {
          systemThemeMatch.removeEventListener("change", handleChange);
        };
      }
    }

    return () => {};
  }, [systemThemeMatch]);

  return theme;
}

export default useSystemTheme;
