import { createContext, useState, useContext, useCallback } from "react";
import { ThemeProvider as StyledProvider } from "styled-components";

const SortContext = createContext({});

const SortProviderToggle = ({ children }) => {
  const [SortMode, setSortMode] = useState("white");
  const sortObject = SortMode === "white" ? whiteTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ SortMode, setSortMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

function useSort() {
  const context = useContext(SortContext);
  const { SortMode, setSortMode } = context;

  const toggleSort = useCallback(() => {
    if (SortMode === "white") {
      setSortMode("dark");
    } else {
      setSortMode("white");
    }
  }, [SortMode]);

  return [SortMode, toggleSort];
}

export { SortProviderToggle, useSort };
