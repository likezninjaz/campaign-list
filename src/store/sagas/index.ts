import { all, fork } from "redux-saga/effects";

import { getMainDataWatcher } from "./main";

export function* rootSaga() {
  yield all([
    fork(getMainDataWatcher),
  ]);
}
