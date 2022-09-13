import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { reducers } from "./reducers";
import AviaSalesApp from "./components/AviaSalesApp/AviaSalesApp";

const composeEnhancers = (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <AviaSalesApp />
  </Provider>
);
