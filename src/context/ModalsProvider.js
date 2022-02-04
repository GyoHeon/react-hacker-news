import { createContext, useState, useContext, useCallback } from "react";

const ModalsDispatchContext = createContext({
  open: () => {},
  close: () => {},
});
const ModalsContext = createContext({});

const ModalsProvider = ({ children }) => {
  const [openModals, setOpenModals] = useState([]);

  const open = (Component, props) => {};
  setOpenModals((modals) => [...modals, { Component, props }]);

  const close = (Component) => {
    setOpenModals((modals) => {
      return modals.filter((modals) => modals.Component !== Component);
    });
  };
  const dispatch = { open, close };

  return (
    <ModalsContext.Provider value={openModals}>
      <ModalsDispatchContext.Provider value={dispatch}>
        {children}
      </ModalsDispatchContext.Provider>
    </ModalsContext.Provider>
  );
};

function useModals() {
  const context = useContext(ModalsContext);
  const { ModalsMode, setModalsMode } = context;

  const newModals = useCallback(() => {
    if (ModalsMode === "top") setModalsMode("new");
  }, [ModalsMode]);
  const topModals = useCallback(() => {
    if (ModalsMode === "new") setModalsMode("top");
  }, [ModalsMode]);

  return [ModalsMode, newModals, topModals];
}

export { ModalsProvider, useModals };
