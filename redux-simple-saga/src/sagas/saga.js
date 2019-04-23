import { delay } from "redux-saga/effects";
import { takeLatest, put } from "redux-saga/effects";

function* ageUpAsync() {
  yield put({ type: "LOADING", loading: true });
  yield delay(4000);
  yield put({ type: "INCREMENT_ASYNC", value: 1, loading: false });
}

export function* watchAgeUp() {
  yield takeLatest("INCREMENT", ageUpAsync);
}
