import { all } from 'redux-saga/effects';
import { articlesSaga } from '../articles/redux/articlesSaga';

export function* rootSaga() {
  yield all([articlesSaga()]);
};