import { whiteTheme, darkTheme } from "./styles/theme";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProviderToggle } from "./context/ThemeProvider";
import { SortProviderToggle } from "./context/SortProvider";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProviderToggle>
      <SortProviderToggle>
        <App />
      </SortProviderToggle>
    </ThemeProviderToggle>
  </React.StrictMode>,
  document.getElementById("root")
);
