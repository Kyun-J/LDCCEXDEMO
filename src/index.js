import 'core-js/es/map';
import 'core-js/es/set';

import React from "react";
import ReactDom from "react-dom";

import { createStore } from "redux";
import reducers from "./store/reducers";
import { Provider } from "react-redux";

import splitLoad from './splitLoad'

const MAIN = splitLoad(import('./main'))

const store = createStore(reducers);

const root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);

ReactDom.render(
  <Provider store={store}>
    <MAIN />
  </Provider>,
  root
);