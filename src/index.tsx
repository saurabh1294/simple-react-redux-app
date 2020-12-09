import "react-app-polyfill/ie11"; // fix IE script 1002 error
import "react-app-polyfill/stable"; // fix IE script 1002 error

import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";

import configureStore from "./store";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  rootElement
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();