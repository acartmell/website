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

  useEffect(() => {
    if (
      systemThemeMatch &&
      typeof systemThemeMatch.addEventListener === "function"
    ) {
      const handleChange = (event: MediaQueryListEvent) => {
        setTheme(event.matches ? "dark" : "light");
      };
      systemThemeMatch.addEventListener("change", handleChange);

      return () => {
        systemThemeMatch.removeEventListener("change", handleChange);
      };
    } else {
      return () => {};
    }
  }, [systemThemeMatch]);

  if (!isSupported()) {
    return "light";
  }

  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (systemThemeMatch?.matches) {
      return "dark";
    }
    return "light";
  });

  return theme;
}

export default useSystemTheme;
