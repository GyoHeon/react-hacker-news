import { whiteTheme, darkTheme } from "../styles/theme";
import { createContext, useState, useContext, useCallback } from "react";
import { ThemeProvider as StyledProvider } from "styled-components";

const ThemeContext = createContext({});

const ThemeProviderToggle = ({ children }) => {
  const [ThemeMode, setThemeMode] = useState("white");
  const themeObject = ThemeMode === "white" ? whiteTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ ThemeMode, setThemeMode }}>
      <StyledProvider theme={themeObject}> {children}</StyledProvider>
    </ThemeContext.Provider>
  );
};

function useTheme() {
  const context = useContext(ThemeContext);
  const { ThemeMode, setThemeMode } = context;

  const toggleTheme = useCallback(() => {
    if (ThemeMode === "white") {
      setThemeMode("dark");
    } else {
      setThemeMode("white");
    }
  }, [ThemeMode]);

  return [ThemeMode, toggleTheme];
}

export { ThemeProviderToggle, useTheme };
