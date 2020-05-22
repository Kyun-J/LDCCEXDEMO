import React from "react";
import ReactDom from "react-dom";
import MAIN from "./main";

import { createStore } from "redux";
import reducers from "./store/reducers";
import { Provider } from "react-redux";

const store = createStore(reducers);

ReactDom.render(
  <Provider store={store}>
    <MAIN />
  </Provider>,
  document.getElementById("root")
);