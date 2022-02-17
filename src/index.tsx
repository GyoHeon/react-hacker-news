import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { SortProviderToggle } from "./context/SortProvider";
import rootReducer from "./store/index";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <SortProviderToggle>
        <App />
      </SortProviderToggle>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
