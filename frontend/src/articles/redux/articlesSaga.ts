import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchApi } from "../../utils/axiosApi"
import articlesActions, { GET_ARTICLES } from "./articlesActions"

export function* articlesSaga() {
  yield all([
    takeLatest(GET_ARTICLES, getArticlesFromDatabase),
  ])
}

function* getArticlesFromDatabase() {
  try
  {
    const { data } = yield call(fetchApi, "articles");
    yield put(articlesActions.getArticlesSuccess(data));
  }
  catch (error)
  {
    console.log(error)
    yield put(articlesActions.getArticlesFailure())
  }
}
