
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../redux/rootReducer";
import RootState from "../../redux/rootState";
import ArticleSummary from "../components/ArticleSummary";
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
    if (!data)
    {
      dispatch(articlesActions.getArticles());
    }
  }, [data]);

  return data && data.length
    ? (<>
      {data.map((article: Articles) => (
        <ArticleSummary article={article} />
      ))}

    </>)
    : <Loading />

}
export default ArticlesList;