// import { createContext, useState, useContext, useCallback } from "react";

// const ModalsDispatchContext = createContext({
//   open: () => {},
//   close: () => {},
// });
// const ModalsContext = createContext({});

// const ModalsProvider = ({ children }) => {
//   const [openModals, setOpenModals] = useState([]);

//   const open = (Component, props) => {};
//   setOpenModals((modals) => [...modals, { Component, props }]);

//   const close = (Component) => {
//     setOpenModals((modals) => {
//       return modals.filter((modals) => modals.Component !== Component);
//     });
//   };
//   const dispatch = { open, close };

//   return (
//     <ModalsContext.Provider value={openModals}>
//       <ModalsDispatchContext.Provider value={dispatch}>
//         {children}
//       </ModalsDispatchContext.Provider>
//     </ModalsContext.Provider>
//   );
// };

// function useModals() {
//   const { open, close } = useContext(ModalsDispatchContext);

//   const openModals = (Component, props) => {
//     open(Component, props);
//   };
//   const closeModals = (Component, props) => {
//     close(Component, props);
//   };

//   return [newModals, topModals];
// }

// export { ModalsProvider, useModals };
