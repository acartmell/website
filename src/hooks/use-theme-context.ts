import { useContext } from "react";
import { ThemeContext } from "../contexts/theme-context";

function useThemeContext() {
  return useContext(ThemeContext);
}

export default useThemeContext;
