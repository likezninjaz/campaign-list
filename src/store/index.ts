import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import { createLogger } from "redux-logger";

import { rootReducer } from './reducers';
import { rootSaga } from "./sagas";

const dev = process.env.NODE_ENV !== 'production';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger({
  collapsed: true
});
let middlewares: any[] = [ sagaMiddleware ];

if (dev) {
  middlewares = [...middlewares, logger];
}

export const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

sagaMiddleware.run(rootSaga);
