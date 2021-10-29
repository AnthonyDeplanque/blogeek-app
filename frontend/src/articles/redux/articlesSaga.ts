import { all, put, takeLatest } from "@redux-saga/core/effects"
import { Articles } from "../../models/Articles"
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
    const articles = new Promise((resolve, _reject) => fetchApi('articles').then(result => resolve(result)))
    Promise.resolve(articles).then(function* (res: Articles[] | any) {
      yield put(articlesActions.getArticlesSuccess(res));
    });
  }
  catch (error)
  {
    console.log(error)
    yield put(articlesActions.getArticlesFailure())
  }
}