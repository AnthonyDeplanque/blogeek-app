import createSagaMiddleware, { SagaMiddleware } from "@redux-saga/core";
import { Store, createStore, compose, applyMiddleware } from "redux"
import { promiseMiddleware } from "redux-saga-promise-actions";
import rootReducer from "./rootReducer"
import { rootSaga } from "./rootSaga";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const sagaMiddleWare: SagaMiddleware = createSagaMiddleware();
const store: Store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(promiseMiddleware, sagaMiddleWare)
));
sagaMiddleWare.run(rootSaga)

export default store;

