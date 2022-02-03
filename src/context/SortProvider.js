import { createContext, useState, useContext, useCallback } from "react";

const SortContext = createContext({});

const SortProviderToggle = ({ children }) => {
  const [SortMode, setSortMode] = useState("top");

  return (
    <SortContext.Provider value={{ SortMode, setSortMode }}>
      {children}
    </SortContext.Provider>
  );
};

function useSort() {
  const context = useContext(SortContext);
  const { SortMode, setSortMode } = context;

  const newSort = useCallback(() => {
    if (SortMode === "top") setSortMode("new");
  }, [SortMode]);
  const topSort = useCallback(() => {
    if (SortMode === "new") setSortMode("top");
  }, [SortMode]);

  return [SortMode, newSort, topSort];
}

export { SortProviderToggle, useSort };
