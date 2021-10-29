import { all } from 'redux-saga/effects';
import { articlesSaga } from '../articles/redux/articlesSaga';
import { usersSaga } from '../users/redux/usersSaga';

export function* rootSaga() {
  yield all([
    articlesSaga(),
    usersSaga(),
  ]);
};