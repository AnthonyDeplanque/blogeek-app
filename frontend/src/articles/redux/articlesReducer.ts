import ArticlesState from "../models/articleState";
import { ArticlesActionsType, GET_ARTICLES_SUCCESS, GET_ARTICLES_FAILURE } from "./articlesActions";

const defaultState: ArticlesState | null = {
  data: undefined
}

export const articlesReducer = (state: ArticlesState = defaultState, action: ArticlesActionsType): ArticlesState => {
  switch (action.type)
  {
    case GET_ARTICLES_SUCCESS:
      return {
        ...state,
        data: action.payload
      };
    case GET_ARTICLES_FAILURE:
      return state;
    default:
      return state;
  }
}
