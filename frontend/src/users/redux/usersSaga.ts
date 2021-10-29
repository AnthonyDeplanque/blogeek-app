import { all, takeLatest, call, put } from "@redux-saga/core/effects"
import { fetchApi } from "../../utils/axiosApi"
import usersActions, { GET_USERS } from "./usersActions"

export function* usersSaga() {
  yield all([
    takeLatest(GET_USERS, getUserFromDatabase)
  ])
}

function* getUserFromDatabase() {
  try
  {
    const { data } = yield call(fetchApi, 'users');
    yield put(usersActions.getUsersSuccess(data));
  }
  catch (error)
  {
    console.log(error);
    yield put(usersActions.getUsersFailure());
  }
}
