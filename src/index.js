import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "@containers/App/App";
import "./wydr.js";
import { Provider } from "react-redux";
import store from "../src/store/store";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
