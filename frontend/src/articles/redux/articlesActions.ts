import { Articles } from "../../models/Articles";

export const GET_ARTICLES = "GET_ARTICLES";
export const GET_ARTICLES_SUCCESS = 'GET_ARTICLES_SUCCESS';
export const GET_ARTICLES_FAILURE = 'GET_ARTICLES_FAILURE';

export interface getArticlesAction {
  type: typeof GET_ARTICLES;
}
export interface getArticlesSuccessAction {
  type: typeof GET_ARTICLES_SUCCESS;
  payload: Articles[];
}

export interface getArticlesFailureAction {
  type: typeof GET_ARTICLES_FAILURE;
}

export type ArticlesActionsType =
  getArticlesAction |
  getArticlesSuccessAction |
  getArticlesFailureAction

export const articlesActions = {
  getArticles: ((): getArticlesAction => {
    return {
      type: GET_ARTICLES
    }
  }),
  getArticlesSuccess: ((articles: Articles[]): getArticlesSuccessAction => {
    return {
      type: GET_ARTICLES_SUCCESS,
      payload: articles,
    }
  }),
  getArticlesFailure: ((): getArticlesFailureAction => {
    return {
      type: GET_ARTICLES_FAILURE
    }
  }),
};

export default articlesActions;