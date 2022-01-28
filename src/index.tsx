import { ThemeProvider } from "styled-components";
import { whiteTheme } from "./styles/theme";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={whiteTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
