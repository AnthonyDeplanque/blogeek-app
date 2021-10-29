import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { articlesReducer } from "../articles/redux/articlesReducer";
import RootState from "./rootState";
import { combineReducers } from 'redux';
import { usersReducer } from '../users/redux/usersReducer';

export default combineReducers<RootState>({
  articles: articlesReducer,
  users: usersReducer,
})

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;