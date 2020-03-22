import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleWare from "redux-saga";

import rootReducer from "./reducers";
import watchers from "./sagas";

const composeEnhanters =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose

const sagaMiddleware = createSagaMiddleWare()

const store = createStore(
  rootReducer,
  composeEnhanters(applyMiddleware(sagaMiddleware)),
)

sagaMiddleware.run(watchers)

export default store
