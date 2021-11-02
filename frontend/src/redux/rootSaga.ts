import { all } from 'redux-saga/effects';
import { articlesSaga } from '../articles/redux/articlesSaga';
import { authSaga } from '../authentication/redux/authSaga';
import { usersSaga } from '../users/redux/usersSaga';

export function* rootSaga() {
  yield all([
    articlesSaga(),
    usersSaga(),
    authSaga(),
  ]);
};