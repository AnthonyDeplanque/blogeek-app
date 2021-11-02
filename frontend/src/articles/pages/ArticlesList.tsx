
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../redux/rootReducer";
import RootState from "../../redux/rootState";
import ArticleDisplay from "../components/ArticleDisplay";
import articlesActions from "../redux/articlesActions";
import { Box } from '@mui/system';
import { Typography, useTheme } from '@mui/material';
import { Articles } from '../../models/Articles';
import Loading from "../../common/components/Loading";


interface ArticlesListProps { }
const ArticlesList: React.FC<ArticlesListProps> = () => {

  const dispatch = useDispatch();
  const theme = useTheme();
  const { data } = useTypedSelector((state: RootState) => state.articles);
  useEffect(() => {
    dispatch(articlesActions.getArticles());
  }, [dispatch]);

  return data?.length
    ? (<>
      {data.map((article: Articles) => (
        <ArticleDisplay article={article} />
      ))}

    </>)
    : <Loading />

}
export default ArticlesList;