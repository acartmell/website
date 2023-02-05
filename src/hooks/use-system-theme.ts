import { useState, useEffect } from "react";

function isSupported() {
  return (
    typeof window !== "undefined" && typeof window.matchMedia === "function"
  );
}

function useSystemTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const systemThemeMatch = isSupported()
    ? window.matchMedia("(prefers-color-scheme: dark)")
    : null;

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
