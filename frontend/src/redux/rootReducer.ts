import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { articlesReducer } from "../articles/redux/articlesReducer";
import RootState from "./rootState";
import { combineReducers } from 'redux';

export default combineReducers<RootState>({
  articles: articlesReducer,
})

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;