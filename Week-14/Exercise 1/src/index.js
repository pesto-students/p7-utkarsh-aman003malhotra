import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import store from "./store";
import { Provider } from "react-redux";
import Room from "./Room";

ReactDOM.render(
  <>
    <Provider store={store}>
      <Room />
    </Provider>
  </>,
  document.getElementById("root")
);
