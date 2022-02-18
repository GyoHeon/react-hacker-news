import { Provider } from "react-redux";
import { createStore } from "redux";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import rootReducer from "./store/index";

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
