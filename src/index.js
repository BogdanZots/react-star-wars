import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "@containers/App/App";
import "./wydr.js";
import { Provider } from "react-redux";
import store from "../src/store/store";
import ThemeProvider from "./context/ThemeProvider";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
