import React from "react"
import ReactDOM from "react-dom"
import { createStore, applyMiddleware, compose } from "redux"
import { Provider } from "react-redux"
import createSagaMiddleWare from "redux-saga"

import reducer from "./store/reducers";
import watchTodo from "./store/sagas";
import App from "./App";

const composeEnhanters =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose

const sagaMiddleware = createSagaMiddleWare()

const store = createStore(
  reducer,
  composeEnhanters(applyMiddleware(sagaMiddleware)),
)

sagaMiddleware.run(watchTodo)

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById("root"))
