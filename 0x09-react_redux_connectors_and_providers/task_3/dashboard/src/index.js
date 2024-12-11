import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import { applyMiddleware, createStore , compose } from "redux";
import { Provider } from "react-redux"
import uiReducer from "./reducers/uiReducer";
import {thunk} from 'redux-thunk';
import rootReducers from "./reducers/rootReducer";

const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f;
const store = createStore(rootReducers, compose(applyMiddleware(thunk), devToolsExtension))
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
