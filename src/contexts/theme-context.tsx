import React, { ReactNode, createContext, useState, useEffect } from "react";
import useSystemTheme from "../hooks/use-system-theme";

type Theme = "light" | "dark";

interface ThemeContextData {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

interface ProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext<ThemeContextData>({
  theme: "light",
  setTheme: () => {},
});

export function ThemeProvider(props: ProviderProps) {
  const { children } = props;
  const systemTheme = useSystemTheme();
  const [theme, setTheme] = useState<Theme>(systemTheme);

  useEffect(() => {
    setTheme(systemTheme);
  }, [systemTheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
}
