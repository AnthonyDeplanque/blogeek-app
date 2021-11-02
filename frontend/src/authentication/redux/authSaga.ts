import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import { postApi } from "../../utils/axiosApi";
import authActions, { getAuthAction, GET_AUTH, setNoAuthAction, SET_NO_AUTH } from "./authActions";

export function* authSaga() {
  yield all([
    takeLatest(GET_AUTH, getAuthentication),
    takeLatest(SET_NO_AUTH, logOffAuthentication)
  ]);
}

function* getAuthentication(action: getAuthAction) {
  try
  {
    const { data } = yield call(postApi, 'users/auth', action.payload);
    yield window.localStorage.setItem('tokenBGA', data.token);
    yield put(authActions.getAuthSuccess(data));
  }
  catch (error)
  {
    console.log(error);
    yield put(authActions.getAuthFailure());
  }
}
function* logOffAuthentication(action: setNoAuthAction) {
  try 
  {
    yield put(authActions.setNoAuthSuccess(null));
    yield window.localStorage.removeItem('tokenBGA');
  }
  catch (error)
  {
    console.log(error);
    yield put(authActions.setNoAuthFailure());
  }
}