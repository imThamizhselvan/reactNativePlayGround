import { take, call, put, select, takeLatest, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { priceRequest, priceResponse } from './actions';

function* priceRequest() {
  console.log('sagas');
  try {
    const response = yield call('https://jsonplaceholder.typicode.com/todos/1');
    yield put(priceResponse(response));
  } catch (e) {
    console.log('error', e);
    yield* handleError(e);
  }
}

function* rootSaga() {
  const watcher = yield [
    takeLatest(PRICE_REQUEST, priceRequest),
  ];

  yield take(LOCATION_CHANGE);
  yield watcher.map((task) => cancel(task));
}

export default [
  rootSaga,
];
