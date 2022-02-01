import { whiteTheme, darkTheme } from "./styles/theme";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProviderToggle, useTheme } from "./context/ThemeProvider";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProviderToggle>
      <App />
    </ThemeProviderToggle>
  </React.StrictMode>,
  document.getElementById("root")
);
