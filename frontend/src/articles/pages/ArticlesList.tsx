import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useTypedSelector } from "../../redux/rootReducer";
import RootState from "../../redux/rootState";

import ArticleDisplay from "../components/ArticleDisplay";
import articlesActions from "../redux/articlesActions";


interface ArticlesListProps { }
const ArticlesList: React.FC<ArticlesListProps> = () => {

  const dispatch = useDispatch()
  //@ts-ignore
  const { data } = useTypedSelector((state: RootState) => state.articles);
  useEffect(() => {
    dispatch(articlesActions.getArticles());
  }, [data]);

  return (
    <Box>
      <Typography>Hello World</Typography>
      {
        data && data.map((article) =>
          <ArticleDisplay article={article} />
        )
      }

    </Box>
  );
}

export default ArticlesList;